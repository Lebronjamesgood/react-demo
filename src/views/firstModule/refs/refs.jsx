import React,{PureComponent} from "react"
import {Button,Input} from "antd"

class refs extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {}
		this.btnRef = React.createRef()
		this.focusTextInput = this.focusTextInput.bind(this)
	}
	focusTextInput(){
    //ref对象通过current获取当前的焦点,和vue类似 this.$refs.myRef
    console.log(this.btnRef)
    this.btnRef.current.input.value = `${this.btnRef.current.input.value}1`
  }
	render() {
		return (
			<div>
				<Button onClick={this.focusTextInput}>点击我</Button>
				<Input ref={this.btnRef}></Input>
			</div>
		)
	}
}

export default refs;