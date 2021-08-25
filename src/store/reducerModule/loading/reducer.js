/*
 * @Files:
 * @Version: 1.0
 * @Author: zhengjiangwei
 * @Date: 2021-08-19 17:22:15
 * @LastEditors: zhengjiangwei
 * @LastEditTime: 2021-08-23 16:57:50
 */

import actionType from './actionType'

let defaultState = {
	loadingStatus: false,
}

const changeLoadingStatus = (state = defaultState, action) => {
	if (action.type === actionType.OPEN_PAGE_LOADING) {
    debugger
		let newState = JSON.parse(JSON.stringify(state))
		newState.loadingStatus = true
		return newState
	} else if (action.type === actionType.CLOSE_PAGE_LOADING) {
    debugger
		let newState = JSON.parse(JSON.stringify(state))
		newState.loadingStatus = false
		return newState
	} 
  else {
		return { ...state }
	}
}

export default changeLoadingStatus
