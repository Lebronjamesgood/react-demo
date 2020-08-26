import React, { Component } from 'react'
import {DatePicker} from 'antd'
import './index.less'
import SvgIcon from '../SvgIcon'
import moment from "moment"


class header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showMyInformation: false,
			dateInteval: null,
			dateFormat: 'YYYY/MM/DD',
			homeData: {
				date: moment(new Date(), 'YYYY/MM/DD'),
			},
		}
  }
  componentDidMount(){
    const _this = this
    _this.state.dateInteval = setInterval(() => {
      let date_pick = _this.state.homeData.date
      date_pick = moment(new Date(), 'YYYY/MM/DD')
			_this.setState(() => ({
				date_pick
			}))
		}, 3000)
  }
  componentWillUnmount(){
    clearImmediate(this.state.dateInteval)
  }
	clickDialog() {}
	displayInformation=()=>{
    this.setState(state=>({
      showMyInformation : !state.showMyInformation
    }))
  }
	render() {
		if (!this.props.isSHow) {
			return null
    }
    
    const home_icon = ['home_icon','calendar','user','logout_icon']
		return (
			<div className="logo-box">
				<ul className="user-info">
					<li title="首页" onClick={this.goHome}>
						<SvgIcon iconClass={home_icon[0]} widthW="22px" heightH="22px"></SvgIcon>
					</li>
					<li title="日历">
						<SvgIcon iconClass={home_icon[1]} widthW="22px" heightH="22px"></SvgIcon>
						<DatePicker
							onChange={this.onChange}
							defaultValue={this.state.homeData.date}
							format={this.state.dateFormat}
						></DatePicker>
					</li>
					<li
						ref="showPersonMy"
						onClick={() => {
							this.displayInformation()
						}}
					>
						<SvgIcon iconClass={home_icon[2]} widthW="22px" heightH="22px"></SvgIcon>
						xxx欢迎您
						{(() => {
							if (this.state.showMyInformation) {
								return (
									<div className="show-person">
										<p
											onClick={() => {
												this.clickDialog()
											}}
										>
											修改密码
										</p>
										<p>我的资料</p>
									</div>
								)
							} else {
								return null
							}
						})()}
					</li>
					<li title="退出">
						<SvgIcon iconClass={home_icon[3]} widthW="22px" heightH="22px"></SvgIcon>
					</li>
				</ul>
			</div>
		)
	}
}

export default header
