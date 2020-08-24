import React, { Component } from 'react'

export default class richMen extends Component {
  toPoorMen = ()=> {
    //query 方式传递参数
    this.props.history.push({ pathname: '/men/poorMen', query: { id: '我来自richMen' } })
  }
	render() {
		return (
			<div>
				欢迎，这里是富人
				<p>ID:{this.props.location.state.id}</p>
				<button onClick={this.toPoorMen}>点我</button>
			</div>
		)
	}
}