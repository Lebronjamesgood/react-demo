import React, { Component } from 'react'
import './index.less'
import Header from "./../../components/header/header"

class layout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showHeader:true
		}
	}
	
	render() {
		return (
			<div className="layout">
				<Header isSHow={this.state.showHeader} />
				{this.props.children}
			</div>
		)
	}
}

export default layout
