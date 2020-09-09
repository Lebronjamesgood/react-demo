/**
 *  React Hook学习 usestate()
 *  只能用于函数组件 Class组件不支持(坑)
 *  Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。
 *  Hook 不能在 class 组件中使用 —— 这使得你不使用 class 也能使用 React
 *  只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用
 *  它类似 class 组件的 this.setState
 */


import React, { useState } from 'react'
import './index.less'
import EffectHook from "./effectHook"
import GoodsTable from "./goodsTable"

function Example() {
	//初始 state 就是 0。值得注意的是，不同于 this.state，这里的 state 不一定要是一个对象 —— 如果你有需要，它也可以是。
	//这个初始 state 参数只有在第一次渲染时会被用到
	//useState 会返回一对值：当前状态count和一个让你更新它的函数setCount()，你可以在事件处理函数中或其他一些地方调用这个函数
  const [count, setCount] = useState(0)
  //也可以设置多个useState()
  const [age, setAge] = useState(42)
  const [fruit, setFruit] = useState('banana')
  const friend = {id:count}
	return (
		<div className="click-count">
			<p >You clicked {count} times</p>
			<p >You clicked {age} </p>
			<p >You clicked {fruit} </p>
			{/* 一个事件可以绑定多个方法 */}
			<button
				onClick={() => {
					setCount(count + 1)
					setAge(age + 1)
					setFruit(`${fruit}1`)
				}}
			>
				Click me
			</button>
			<EffectHook friend={friend}></EffectHook>
       {/* 自定义hook */}
      <GoodsTable></GoodsTable>
		</div>
	)
}

export default Example.