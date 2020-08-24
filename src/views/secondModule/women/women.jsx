import React, { Component } from 'react'
import YoungWomen from "./youngWomen/youngWomen"
import OldWomen from './oldWom/oldWomen'



class women extends Component {
	constructor(props) {
    //但是其实你可以向 class 中随意添加不参与数据流的额外字段
    //因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态
    super(props)
    //这里定义组件内的值,和vue里的data(){return{ 这里的值一样}}
    this.state = {
      time: new Date(),
      
    }
  }
  //组件加载生命周期
	componentDidMount(){
    this.timeId = setInterval(() => {
      this.setTick()
    }, 1000);
  }

  //组件即将结束挂载
  componentWillUnmount(){
    clearInterval(this.timeId)
  }
  setTick(){
    // react数据双向绑定,不同于vue的数据双向绑定 
    this.setState({
			time: new Date(),
    })
  }
	toPoorMen = () => {
		this.props.history.push({ pathname: '/men/poorMen', query: { id: '我来自women' } })
	}
	render() {
		return (
			<div>
				这里是women
				<p>ID{this.props.match.params.id}</p>
				<button onClick={this.toPoorMen}>点我去穷人</button>
				<h2>{this.state.time.toLocaleTimeString()}</h2>
				{/* 组件YoungWomen */}
				<YoungWomen name="YoungWomen parent"></YoungWomen>
				{/* 组件OldWomen */}
				<OldWomen name="OldWomen parent" count="1"></OldWomen>
			</div>
		)
	}
}

export default women;
