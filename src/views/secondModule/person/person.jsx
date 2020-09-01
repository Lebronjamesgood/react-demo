//home.js
import React, { Component } from 'react'

export default class Person extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputValue: '',
			SelectValue: '',
		}
	}
	inputChange(event) {
		this.setState({
			inputValue: event.target.value,
		})
	}
	selectChange(event) {
		this.setState({
			SelectValue: event.target.value,
		})
	}
	onFinish = event => {
		alert(`提交的名字:${this.state.inputValue}提交得选项:${this.state.SelectValue}`)
		event.preventDefault()
	}

	render() {
    const options = [
			{ name: '葡萄柚', id: 1 },
			{ name: '西瓜', id: 2 },
			{ name: '芒果', id: 3 },
		]
		return (
			<div>
				<form
					onSubmit={event => {
						this.onFinish(event)
					}}
				>
					<label>
						<input
							type="text"
							placeholder="请输入..."
							value={this.state.inputValue}
							onChange={event => {
								this.inputChange(event)
							}}
						/>
					</label>
					<label>
						<select
							value={this.state.SelectValue}
							onChange={event => {
								this.selectChange(event)
							}}
						>
              {
              options.map((item,index)=>
              <option value={item.id} key={index}>{item.name}</option>
              )
              }
						</select>
					</label>

					<input type="submit" value="提交" />
				</form>
				{/* <Form.Item></Form.Item>
					<Form.Item>
						<Input placeholder="请输入..." />
					</Form.Item>
				</Form> */}
			</div>
		)
	}
}
