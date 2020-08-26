import React, { Component } from 'react'
import Login from "./login"
import NotLogin from './notLogin'
import 'antd/dist/antd.css'

class userLogin extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn:true
		}
	}
	render() {
    const isLogin = this.state.isLoggedIn
    //大括号中可以嵌入任何表达式
    // return <div>{isLogin ? <Login/> : <NotLogin/>}</div>
  return (
		<div>
			{isLogin && <Login route={this.props} />}
			{!isLogin && <NotLogin />}
		</div>
	)
	}
}

export default userLogin
