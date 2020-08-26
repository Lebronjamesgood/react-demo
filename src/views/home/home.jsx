import React, { Component } from 'react'
import Header from "../../components/header/header"
import "./index.less"
import MainMeun from "./mainMenu/mainMenu"

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
			<div className="app-wrapper">
				<Header isSHow={this.state.showHeader} />
				<div className="my-sidebar">
					<MainMeun />
				</div>
			</div>
		)
	}
}

export default home;