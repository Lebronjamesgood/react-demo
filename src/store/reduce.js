/*
 * @Files: 
 * @Version: 1.0
 * @Author: zhengjiangwei
 * @Date: 2020-11-17 14:09:02
 * @LastEditors: zhengjiangwei
 * @LastEditTime: 2021-08-24 09:18:53
 */

import { combineReducers } from 'redux';
import deleteValue from './reducerModule/module1/reducer.js'
import changeLoadingStatus from './reducerModule/loading/reducer.js'

//状态仓库


//reducer会导出一个方法返回新的state, 这个方法支持传入state和action 
//action的type决定要怎么修改那些数据,value为修改后的值
// export default (state = defaultState, action)=>{
//   if (action.type === INPUT_CHANGE_VALUE) {
// 		let newState = JSON.parse(JSON.stringify(state))
// 		newState.inputVal = action.value
// 		return newState
// 	} else if (action.type === INPUT_SUBMIT_VALUE) {
// 		let newState = JSON.parse(JSON.stringify(state))
// 		newState.inputVal = ''
// 		newState.gameList.push(action.value)
// 		return newState
// 	} else if (action.type === INPUT_DELETE_VALUE) {
// 		let newState = JSON.parse(JSON.stringify(state))
// 		newState.gameList.splice(action.value, 1)
// 		return newState
// 	}
// 	return state
// }

export default combineReducers({
	deleteValue,
	changeLoadingStatus,
})