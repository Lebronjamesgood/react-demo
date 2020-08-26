/**
 * 生命周期 
 * -- 卸载 unmounting阶段的生命周期函数
 * 在组件从DOM中移除之前立刻被调用
 *  
 * error 处理函数
 * 
 */

import React,{Component} from 'react'

class lifeCycleUnmounting extends Component {
	//是在React 组件在mounted之前调用的方法
	constructor(props) {
		console.log('-------我是constructor------')
		super(props)
		this.state = {}
	}
	//在组件从DOM中移除之前立刻被调用；
  componentWillUnmount() {}
  //这个方法主要用于当在rendering，或者其他生命周期函数中或者子组件的构造函数中报错是捕捉错误信息
	componentDidCatch(){}
	render() {
		console.log('-------我是render------')
		return (
			<div>
				<h1>这里是生命周期lifeCycleUnmounting</h1>
			</div>
		)
	}
}

export default lifeCycleUnmounting