import React,{Component} from "react"
import store from "../../store/store"
// import { getDeleteValueAction } from '../../store/actionCreators'
import getDeleteValueAction from '../../store/reducerModule/module1/actionCreators'

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
    let action = getDeleteValueAction(index)
		store.dispatch(action)
	}
	changeStore(){
    this.setState(store.getState())
  }
}
export default gameList