/*
 * @Files: 
 * @Version: 1.0
 * @Author: zhengjiangwei
 * @Date: 2021-08-20 14:00:04
 * @LastEditors: zhengjiangwei
 * @LastEditTime: 2021-08-20 16:08:43
 */

/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2020-10-28 10:45:51
 * @LastEditors: zhengjiangwei
 * @LastEditTime: 2021-05-26 16:14:52
 */
import axios from 'axios'
import { message } from 'antd'
import { getToken } from '@/utils/auth'
import store from '../store'
import { Loading } from 'antd'
import _ from 'lodash'
// loading对象
let loading

// 当前正在请求的数量
let needLoadingRequestCount = 0

// 显示loading
function showLoading(target) {
  // 后面这个判断很重要，因为关闭时加了抖动，此时loading对象可能还存在，
  // 但needLoadingRequestCount已经变成0.避免这种情况下会重新创建个loading
  if (needLoadingRequestCount === 0 && !loading) {
    loading = Loading.service({
      lock: true,
      text: '加载中...',
      background: 'rgba(255, 255, 255, 0.5)',
      target: target || 'body'
    })
  }
  needLoadingRequestCount++
}

// 隐藏loading
function hideLoading() {
  needLoadingRequestCount--
  needLoadingRequestCount = Math.max(needLoadingRequestCount, 0)
  if (needLoadingRequestCount === 0) {
    // 关闭loading
    toHideLoading()
  }
}

// 防抖：将 300ms 间隔内的关闭 loading 便合并为一次。防止连续请求时， loading闪烁的问题。
// eslint-disable-next-line no-var
var toHideLoading = _.debounce(() => {
  if (loading) {
    loading.close()
    loading = null
  }
}, 300)

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 15000 // 请求超时时间2
})
// request拦截器
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // 判断当前请求是否设置了不显示Loading
    if (config.headers.showLoading !== false) {
      showLoading(config.headers.loadingTarget)
    }
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      // config.headers['token'] = getToken()

      config.headers['web_token'] = JSON.parse(getToken()).data.token
    }
    return config
  },
  error => {
    // Do something with request error
    hideLoading()
    console.error(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    if (response.config.headers.showLoading !== false) {
      hideLoading()
    }
    const res = response.data
    if (!res) {
      return {}
    }
    if ((res.code && res.code === '200') || response.config.responseType === 'blob') {
      // return res.info
      return res
    } else if (res.resultCode === '200') {
      if (res.data) {
        // return res.data
        return res
      } else {
        return res
      }
    } else if (res.resultCode === '402' || res.resultCode === '403') {
      message.error({
        content: '登录已过期',
        duration: 1000
      })
      // store.dispatch('FedLogOut').then(() => {
      //   setTimeout(() => {
      //     location.reload()
      //   }, 1000)
      //   // 为了重新实例化vue-router对象 避免bug
      // })
      return Promise.reject(res)
    } else if (res.success === false) {
      // TODO: 测试接口 res.success随便生成true和false
      // 暂时隐藏，测试真实接口需要恢复
       message.error({
        content: res.message,
        duration: 3000
      })
      return Promise.reject(res)
    }
    //注意
    // return res
  },
  error => {
    hideLoading()
    let message = ''
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          message = '请求错误(400)'
          break
        case 401:
          message = error.response.data.message || '没有权限(401)'
          break
        case 403:
          message = '拒绝访问(403)'
          break
        case 404:
          message = '请求出错(404)'
          break
        case 408:
          message = '请求超时(408)'
          break
        case 500:
          message = error.response.data.message || '服务器错误(500)'
          break
        case 501:
          message = '服务未实现(501)'
          break
        case 502:
          message = '网络错误(502)'
          break
        case 503:
          message = '服务不可用(503)'
          break
        case 504:
          message = '网络超时(504)'
          break
        case 505:
          message = 'HTTP版本不受支持(505)'
          break
        default:
          message = `连接出错(${error.response.status})!`
      }
    } else {
      message = '连接服务器失败!'
    }
     message.error({
        content: message,
        duration: 3000
      })
      

    return Promise.reject(error)
  }
)
export default service
