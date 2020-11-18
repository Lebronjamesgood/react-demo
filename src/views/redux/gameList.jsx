import React,{Component} from "react"
import store from "../../store/index"
import { connect } from 'react-redux'
import { getDeleteValueAction } from '../../store/actionCreators'

class gameList extends Component {
	constructor(props) {
		super(props)
		this.state = store.getState()
		this.changeStore = this.changeStore.bind(this)
		store.subscribe(this.changeStore)
	}
	render() {
		return (
			<div>
				{this.state.gameList.map((item, index) => {
					return (
						<div className="game-list" key={index} onClick={this.delItem.bind(this, index)}>
							{item}
						</div>
					)
				})}
			</div>
		)
	}
	delItem(index) {
    // let action = getDeleteValueAction(index)
    let action = {
			type: 'input_delete_value',
			index,
		}
    alert(action)
		store.dispatch(action)
	}
	changeStore(){
    this.setState(store.getState())
  }
}
export default gameList