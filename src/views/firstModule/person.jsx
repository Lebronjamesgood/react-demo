//home.js
import React, { Component } from 'react'

export default class Person extends Component {
	toPoorMen = () => {
		this.props.history.push({ pathname: '/men/poorMen', query: { id: '我来自person' } })
	}
	render() {
		return (
			<div>
				<h1>欢迎，这里是Person</h1>
				<button onClick={this.toPoorMen}>点我</button>
			</div>
		)
	}
}
