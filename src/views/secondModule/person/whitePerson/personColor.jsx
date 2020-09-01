/**
 * state状态提升  将state作为父元素的state 旧可以再子元素之间共享了
 * 单向数据流
 * 
 */

 /**
  *  状态提升  和angularjs的作用域有点类似,将state里的数据提升到父组件之中
  *  props到子组件,子组件通过函数修改父组件的state的值 有点像根作用域
  */
import React,{Component} from "react"
import WhitePerson from "./whitePerson"
import YellowPerson from "./yellowPerson"
class personColor extends Component {
	constructor(props) {
		super(props)
		this.state = {
			color: '',
		}
	}
	handleHeightChange = value => {
    console.log('---white----',value)
		this.setState({
			color: value,
		})
	}
	handleColorChange = value => {
    console.log('---yellow----',value)
		this.setState({
			color: value,
		})
	}
	render() {
		const color = this.state.color
		return (
			<div>
				<WhitePerson
					color={color}
					handleColorChange={value => {
						this.handleHeightChange(value)
					}}
				></WhitePerson>
				<YellowPerson
					color={color}
					handleColorChange={value => {
						this.handleColorChange(value)
					}}
				></YellowPerson>
			</div>
		)
	}
}

export default personColor;