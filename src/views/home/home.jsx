import React, { Component } from 'react'
import Header from "./header"

class home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showHeader: true,
		}
	}
	handleToggleClick(){
    this.setState(state=>({
			showWarning: !state.showWarning,
		}))
  }
	render() {
		return (
			<div>
				<h1>welcome</h1>
				<Header isSHow={this.state.showHeader} />
				<button
					onClick={() => {
						this.handleToggleClick()
					}}
				>
					{this.state.showHeader ? 'Hide' : 'Show'}
				</button>
			</div>
		)
	}
}

export default home;