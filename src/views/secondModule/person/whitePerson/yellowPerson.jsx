import React, { Component } from 'react'

class yellowPerson extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}
	handleChange(event) {
    console.log(event)
		this.props.handleColorChange(event.target.value)
	}
	render() {
		const color = this.props.color
		return (
			<div>
				<input
					value={color}
					onChange={event => {
						this.handleChange(event)
					}}
				/>
			</div>
		)
	}
}

export default yellowPerson
