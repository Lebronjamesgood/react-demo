/*
 * @Files: 
 * @Version: 1.0
 * @Author: zhengjiangwei
 * @Date: 2021-08-20 09:29:07
 * @LastEditors: zhengjiangwei
 * @LastEditTime: 2021-08-20 15:12:06
 */

//判断对象是否为空
//对象的键的长度是否等于 0 ,传递的参数是否为实际对象
export const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object


//获取字符串中的字符数
export const characterCount = (str, char) => str.split(char).length - 1

//等待一定时间后执行
export const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

//获取两个日期之间得天差
//Math.ceil 向上取整 Math.round 四舍五入(小数点第一位是5时正负数结果不一样) Math.floor 向下取整
export const daysBetween = (date1, date2) => Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24))

//打乱数组
export const shuffle = arr => arr.sort(() => 0.5 - Math.random())

//计算数组平均值 
export const average = (arr) => arr.reduce((a, b) => a + b) / arr.length



//域名校验
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}







