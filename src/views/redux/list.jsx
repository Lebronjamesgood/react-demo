import React,{Component} from 'react'
import {Card} from "antd"
import GameList from "./gameList"
import GoodList from './goodList'
import "./index.less"

class list extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
			<div>
				<Card title="GameList" className="login-form">
					<GameList></GameList>
				</Card>
				<Card title="GoodList" className="login-form">
					<GoodList></GoodList>
				</Card>
			</div>
		)
  }
}

export default list;