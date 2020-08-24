/**
 * 生命周期 
 * -- 挂载 mounted 当组件实例被创建并插入 DOM 中时 
 * -- 更新 updated 当组件的 props 或 state 发生变化时会触发更新
 * -- 卸载 unmounted 当组件从 DOM 中移除时会调用如下方法
 * 
 */

import React,{Component} from 'react'

class lifeCycle extends Component {
	//挂载
	constructor(props) {
		super(props)
		this.state = {}
	}
	//挂载
  componentWillMount(){

  }
	//挂载
	render() {
		return (
			<div>
				<h1>这里是生命周期lifeCycle</h1>
			</div>
		)
	}
}

export default lifeCycle;