/**
 * 生命周期 
 * -- 创建 mounted 当组件实例被创建并插入 DOM 中时 
 * -- 更新 updated 当组件的 props 或 state 发生变化时会触发更新
 * -- 卸载 unmounted 当组件从 DOM 中移除时会调用如下方法
 * 
 */

import React,{Component} from 'react'

class lifeCycle extends Component {
	//是在React 组件在mounted之前调用的方法
	constructor(props) {
		console.log('-------我是constructor------')
		super(props)
		this.state = {}
	}
	//定时器等信息需要在componentWillUnMount()方法中清除
	componentWillMount() {
		console.log('-------我是componentWillMount------')
	}
	//该方法在mounting结束后执行，官方推荐在该方法中请求远程数据或者放置定时器等信息
	//在这里调用setState方法会导致额外的rending，但是这个渲染会在浏览器更新屏幕之前完成，
	//因此不必担心会影响用户的视觉体验。该方法多数情况，会应用于需要根据DOM节点的位置或者大小来展示tooltips或者模态框
	componentDidMount() {
		console.log('-------我是componentDidMount------')
	}
	//方法在每次render方法调用之前被调用,该方法在每次render之前都会被调用，并且返回值将被放到state中。
	//无论是父组件的更新, props 的变化, 或是组件内部执行了 setState(), 它都会被调用.
	static getDerivedStateFromProps() {
		console.log('-------我是getDerivedStateFromProps------')
	}
	//首先查看this.props和this.state然后return下面其中一个类型的信息
	render() {
		console.log('-------我是render------')
		return (
			<div>
				<h1>这里是生命周期lifeCycle</h1>
			</div>
		)
	}
}

export default lifeCycle;