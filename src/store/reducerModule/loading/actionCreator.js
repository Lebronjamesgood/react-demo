/*
 * @Files:
 * @Version: 1.0
 * @Author: zhengjiangwei
 * @Date: 2021-08-19 17:28:47
 * @LastEditors: zhengjiangwei
 * @LastEditTime: 2021-08-23 16:38:17
 */

import actionType from './actionType.js'

//action为一个对象,对象中最基本包含两个属性
//type:也就是actionType 表示如何修改
//value表示修改后的值
//当然还可以有其他属性  比如异步数据流(http请求)的status标志 等等
export function openPageLoading(value) {
	return {
		type: actionType.OPEN_PAGE_LOADING,
		value,
	}
}
export function closePageLoading(value) {
	return {
		type: actionType.CLOSE_PAGE_LOADING,
		value,
	}
}

