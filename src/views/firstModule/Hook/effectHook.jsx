/**
 * useEffect 就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数
 * 由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state。
 * 默认情况下，React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。(类似component里的生命周期componentDidMount 和 componentDidUpdate:)
 * 
 */


import React,{useState,useEffect} from "react"
import './index.less'

function EffectHook(props) {
	const [isOnline, setIsOnline] = useState(null)
	const [count, setCount] = useState(0)
	// 相当于 componentDidMount 和 componentDidUpdate:
	//useEffect里传入的就是执行操作之后执行的函数
	useEffect(() => {
		// 使用浏览器的 API 更新页面标题
		document.title = `You clicked ${count} times`
    handleStatusChange(props)
	})

	function handleStatusChange(status) {
		setIsOnline(status.id)
	}
	if (isOnline === null) {
		return 'Loading...'
	}
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
			{!isOnline ? 'Online' : 'Offline'}
		</div>
	)
}

export default EffectHook;