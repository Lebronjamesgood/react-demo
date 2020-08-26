import React, { Component } from 'react'

class header extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
    if (!this.props.isSHow) {
      return null
		}
		return (
			<div>
				<h1>条件渲染</h1>
			</div>
		)
	}
}

export default header
