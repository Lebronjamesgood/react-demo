
import React,{Component} from 'react'
class oldWomen extends Component {
  constructor(props) {
    super(props);
    this.state = {
			count: 1,
		}
  }
  componentDidMount(){

  }
  counter=()=>{
    //异步会造成数据无法更新
    this.setState({
			count : this.state.count + this.props.count
    })
    //异步采用函数的方式
    // this.setState((state, props) => ({
		// 	count: state.count + props.count,
		// }))
  }
  render() {
    return (
			<div>
				<h1>oldWomen</h1>
				<p>我是父组件传递来的{this.props.name}</p>
				<p>我是父组件传递来的count:{this.props.count}</p>
				<p>我是自己的count:{this.state.count}</p>
				<p>count:{this.state.count}</p>
        <button onClick={this.counter}>点我更新count</button>
			</div>
		)
  }
}

export default oldWomen;