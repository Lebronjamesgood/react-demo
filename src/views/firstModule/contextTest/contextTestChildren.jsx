import React, { Component } from 'react'
import ContextTestChildren1 from './contextTestChildren1'

class contextTestChildren extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div>
				<ContextTestChildren1></ContextTestChildren1>
			</div>
		)
	}
}

export default contextTestChildren
