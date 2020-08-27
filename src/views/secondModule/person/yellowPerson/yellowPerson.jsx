import React, { Component } from 'react'
import PersonColor from './../whitePerson/personColor'

class yellowPerson extends Component {
	constructor(props) {
		super(props)
		this.state = {
			color: '',
		}
	}
	handleChange(event) {
		this.setState({ color: event.target.value })
	}
	render() {
		const color = this.state.color
		return (
			<div>
				<input
					value={color}
					onChange={event => {
						this.handleChange(event)
					}}
				/>
				<PersonColor color={color}></PersonColor>
			</div>
		)
	}
}

export default yellowPerson
