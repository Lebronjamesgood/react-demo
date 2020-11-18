import {INPUT_CHANGE_VALUE,INPUT_SUBMIT_VALUE,INPUT_DELETE_VALUE} from "./actionTypes"




let defaultState = {
	inputVal: '',
	gameList: ['塞尔达传说-旷野之息', '马里奥奥德赛', '精灵宝可梦剑盾', '异度之刃'],
}
export default (state = defaultState, action)=>{
  if (action.type === INPUT_CHANGE_VALUE) {
		let newState = JSON.parse(JSON.stringify(state))
		newState.inputVal = action.value
		return newState
	} else if (action.type === INPUT_SUBMIT_VALUE) {
		let newState = JSON.parse(JSON.stringify(state))
		newState.inputVal = ''
		newState.gameList.push(action.value)
		return newState
	} else if (action.type === INPUT_DELETE_VALUE) {
		let newState = JSON.parse(JSON.stringify(state))
		newState.gameList.splice(action.value, 1)
		return newState
	}
	return state
}
