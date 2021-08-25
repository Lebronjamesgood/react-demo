/*
 * @Files: 
 * @Version: 1.0
 * @Author: zhengjiangwei
 * @Date: 2021-08-20 11:08:41
 * @LastEditors: zhengjiangwei
 * @LastEditTime: 2021-08-20 11:08:43
 */
import Cookies from 'js-cookie'

const LoginKey = 'hasLogin'

export function getToken() {
  return Cookies.get(LoginKey)
}

export function setToken(data) {
  return Cookies.set(LoginKey, data)
}

export function removeToken() {
  return Cookies.remove(LoginKey)
}