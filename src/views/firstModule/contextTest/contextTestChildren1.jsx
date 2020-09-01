
import React, { Component } from 'react'
import {ThemeContext} from './context/colorContext'
import {UserContext} from "./context/userContext"
import { Button } from 'antd'

class contextTestChildren1 extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	// 指定 number 读取当前的 NumberContext。
	// React 会往上找到最近的 number Provider，然后使用它的值。
	// 在这个例子中，当前的 theme 值为 “dark”。

	// static contextTypes = ThemeContext
	render() {
		return (
      // Consumer作为消费者更新变化后的dom
      //多个context需要嵌套使用,嵌套最小组件
			<ThemeContext.Consumer>
				{theme => (
					<UserContext>
						{user => (
							<Button style={{ backgroundColor: theme.background, color: theme.foreground }}>
								我是{user}
              </Button>
						)}
					</UserContext>
				)}
			</ThemeContext.Consumer>
		)
	}
}

export default contextTestChildren1
