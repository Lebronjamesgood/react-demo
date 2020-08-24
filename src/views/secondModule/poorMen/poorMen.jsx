import React, { Component } from 'react'

export default class poorMen extends Component {
	toWoMen = val => {
		switch (val) {
			case 1:
				this.props.history.push({ pathname: '/men/richMen', state: { id: 12 } })
				break
			case 2:
				this.props.history.push({ pathname: `/person`, query: { id: 1 } })
				break
			case 3:
				this.props.history.push({ pathname: `/men/women/1` })
				break
			default:
				break
		}
	}
	render() {
		return (
			<div>
				这里是穷人
				<p>ID:{this.props.location.query.id}</p>
				<button
					onClick={() => {
						this.toWoMen(1)
					}}
				>
					点我去富人
				</button>
				<button
					onClick={() => {
						this.toWoMen(2)
					}}
				>
					点我去人
				</button>
				<button
					onClick={() => {
						this.toWoMen(3)
					}}
				>
					点我去女人
				</button>
			</div>
		)
	}
}
