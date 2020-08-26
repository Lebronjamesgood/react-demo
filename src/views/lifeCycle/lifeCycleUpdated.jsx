/**
 * 生命周期 
 * -- 更新 updated 当组件的 props 或 state 发生变化时会触发更新
 * 只有当props或者state改变是才会引起updating，进而组件会被重新渲染
 */

import React,{Component} from 'react'

class lifeCycleUpdated extends Component {
	//是在React 组件在mounted之前调用的方法
	constructor(props) {
		console.log('-------我是constructor------')
		super(props)
		this.state = {}
	}
	//该方法在更新发生之后被调用，第一次render的时候并不会被调用；
	componentDidUpdate(prevProps, prevState, snapshot) {}
	//该方法在收到new props或者new state之后，render之前被调用,默认该方法返回true，当返回false时，render方法将不会执行
	shouldComponentUpdate(nextProps, nextState) {}
	//首先查看this.props和this.state然后return下面其中一个类型的信息
	//这种方式十分适合父子组件的互动，通常是父组件需要通过某些状态控制子组件渲染亦或销毁...
	//componentWillReceiveProps和getDerivedStateFromProps同时存在，控制台报错。
	componentWillReceiveProps(nextProps) {
		//componentWillReceiveProps方法中第一个参数代表即将传入的新的Props
		if (this.props.sharecard_show !== nextProps.sharecard_show) {
			//在这里我们仍可以通过this.props来获取旧的外部状态
			//通过新旧状态的对比，来决定是否进行其他方法
			if (nextProps.sharecard_show) {
				this.handleGetCard()
			}
		}
	}
	handleGetCard() {}
	render() {
		console.log('-------我是render------')
		return (
			<div>
				<h1>这里是生命周期lifeCycleUpdated</h1>
			</div>
		)
	}
}

export default lifeCycleUpdated