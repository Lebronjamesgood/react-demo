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
        {/* 嵌套路由必须添加下面这行 */}
				{this.props.children}
			</h1>
		)
	}
}
