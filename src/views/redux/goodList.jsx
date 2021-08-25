import React, { Component } from 'react'
import { Button, Input } from 'antd'
import store from '../../store/store'
import {
	getChangeValueAction,
	getSubmitValueAction,
} from '../../store/actionCreators'

class goodList extends Component {
	constructor(props) {
		super(props)
		//store.getSate()获取state内的值
		this.state = store.getState()
		this.handleSubmit = this.handleSubmit.bind(this)
		this.changeInput = this.changeInput.bind(this)
		this.changeStore = this.changeStore.bind(this)
		//subscribe监听store内值每次的修改情况
		store.subscribe(this.changeStore)
	}
	render() {
		return (
			<div>
				<Input value={this.state.inputVal} placeholder="to do item" onChange={this.changeInput} />
				<Button type="primary" onClick={this.handleSubmit}>
					提交
				</Button>
			</div>
		)
	}
	changeInput(e) {
		let action = getChangeValueAction(e.target.value)
		store.dispatch(action)
	}
	handleSubmit() {
    let action = getSubmitValueAction(this.state.inputVal)
    //store.dispatch()方法支持传入action,将action派发给reducer以更改state
		store.dispatch(action)
	}
	changeStore() {
		this.setState(store.getState())
	}
}
export default goodList
