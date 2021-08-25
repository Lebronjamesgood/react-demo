/*
 * @Files: 
 * @Version: 1.0
 * @Author: zhengjiangwei
 * @Date: 2021-08-19 17:22:15
 * @LastEditors: zhengjiangwei
 * @LastEditTime: 2021-08-23 16:21:45
 */

import actionType from './actionType'

let defaultState = {
	inputVal: '1',
	gameList: ['塞尔达传说-旷野之息', '马里奥奥德赛', '精灵宝可梦剑盾', '异度之刃'],
}

const deleteValue = (state = defaultState,action)=>{
  if(action.type === actionType.INPUT_DELETE_VALUE) {
    debugger
		let newState = JSON.parse(JSON.stringify(state))
		newState.gameList.splice(action.value, 1)
    newState.inputVal= '1234'
		return newState
  }else{
    return { ...state }
  }
}


export default deleteValue