//集中管理不通的修改方式

import { INPUT_CHANGE_VALUE, INPUT_SUBMIT_VALUE, INPUT_DELETE_VALUE } from './actionTypes.js'

//action为一个对象,对象中最基本包含两个属性  
//type:也就是actionType 表示如何修改
//value表示修改后的值
//当然还可以有其他属性  比如异步数据流(http请求)的status标志 等等
export function getChangeValueAction(value){
	return {
		type: INPUT_CHANGE_VALUE,
		value,
	}
}
export function getSubmitValueAction(value) {
	return {
		type: INPUT_SUBMIT_VALUE,
		value,
	}
}
export function getDeleteValueAction(value)  {
	return {
		type: INPUT_DELETE_VALUE,
		value,
	}
}
