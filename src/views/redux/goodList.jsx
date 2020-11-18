import React, { Component } from 'react'
import { Button, Input } from 'antd'
import store from '../../store/index'
import {
	getChangeValueAction,
	getSubmitValueAction,
} from '../../store/actionCreators'

class goodList extends Component {
	constructor(props) {
		super(props)
		this.state = store.getState()
		this.handleSubmit = this.handleSubmit.bind(this)
		this.changeInput = this.changeInput.bind(this)
		this.changeStore = this.changeStore.bind(this)
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
		store.dispatch(action)
	}
	changeStore() {
		this.setState(store.getState())
	}
}
export default goodList
