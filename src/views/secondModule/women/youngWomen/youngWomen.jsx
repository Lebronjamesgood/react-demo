import React, { Component } from 'react'

class youngWomen extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div>
				<h1>这里是youngWomen</h1>
				<p>我是父组件传递来的{this.props.name}</p>
			</div>
		)
	}
}

export default youngWomen;