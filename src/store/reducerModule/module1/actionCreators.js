/*
 * @Files: 
 * @Version: 1.0
 * @Author: zhengjiangwei
 * @Date: 2021-08-19 17:28:47
 * @LastEditors: zhengjiangwei
 * @LastEditTime: 2021-08-23 15:52:15
 */

import actionType from './actionType.js'

//action为一个对象,对象中最基本包含两个属性  
//type:也就是actionType 表示如何修改
//value表示修改后的值
//当然还可以有其他属性  比如异步数据流(http请求)的status标志 等等
const getDeleteValueAction = (value)=>{
	return {
		type: actionType.INPUT_CHANGE_VALUE,
		value,
	}
}
export default getDeleteValueAction