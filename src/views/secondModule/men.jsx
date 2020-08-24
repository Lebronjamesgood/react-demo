/**
 *  路由和组件
 */
import React, { Component } from 'react'

export default class Men extends Component {
	render() {
		return (
			<h1>
				欢迎，这里是Men
				<p> ID: {this.props.match}</p>
				{this.props.children}
			</h1>
		)
	}
}
