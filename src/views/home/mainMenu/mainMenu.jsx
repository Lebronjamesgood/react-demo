import React, { Component } from 'react'
import './index.less'
import SvgIcon from './../../../components/SvgIcon'

class mainMenu extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	clickPath = (val) => {
    console.log(this.props)
    this.props.route.history.push({pathname:val})
  }
	render() {
		const tabMapOptions = [
			{
				label: '可视化指挥',
				key: '1',
				icon: 'commandMap',
				url: '/layout/person',
				isHover: false,
			},
			{
				label: '综合统计',
				key: '2',
				icon: 'statistic',
				url: '/layout/lifeCycle',
				isHover: false,
			},
			{ label: '档案管理', key: '3', icon: 'otherSta', url: '/layout/men/poorMen', isHover: false },
			{
				label: '基础设置',
				key: '4',
				icon: 'basicSetting',
				url: '/layout/men/richMen',
				isHover: false,
			},
		]
		return (
				<div className="pulse-icon">
					<div className="circle">
						{tabMapOptions.map((item, index) => {
							return (
								<div
                  key={index}
									className="little-circle"
									onClick={(e) => {
										this.clickPath(item.url,e)
									}}
								>
									<div className="round-circle"></div>
									<SvgIcon iconClass={item.icon} widthW="100px" heightH="100px"></SvgIcon>
									<p>{item.label}</p>
								</div>
							)
						})}
						<div className="center-circle">
							<div className="center-flag"></div>
						</div>
					</div>
				</div>
		)
	}
}

export default mainMenu
