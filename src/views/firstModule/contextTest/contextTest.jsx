/**
 * context  无需明确传递给每一个组件,就能深入传递进组件树
 */

import React, { Component } from 'react'
import ContextTestChildren from "./contextTestChildren"
import { ThemeContext, themes } from './context/colorContext'
import {UserContext,userPower} from "./context/userContext"
import {Button} from "antd"

class contextTest extends Component {
	constructor(props) {
		super(props)
		this.state = {
      theme: themes.dark,
      user : userPower.admin
		}
	}
	changeTheme() {
		this.setState(state => ({
			theme: state.theme === themes.light ? themes.dark : themes.light,
    }))
    this.setState(state => ({
			user: state.user === userPower.admin ? userPower.guest : userPower.admin,
		}))
	}
	render() {
		return (
			<div>
				{/* 只能修改provider包裹的组件 */}
				<ThemeContext.Provider value={this.state.theme}>
					<UserContext.Provider value={this.state.user}>
						<ContextTestChildren></ContextTestChildren>
					</UserContext.Provider>
				</ThemeContext.Provider>
				<Button
					type="primary"
					onClick={() => {
						this.changeTheme()
					}}
				>
					修改context的值
				</Button>
				{/* 不能修改没有被包裹的组件*/}
				<ContextTestChildren />
			</div>
		)
	}
}

export default contextTest;