import React, { Component } from 'react'
import './index.less'
import SvgIcon from './../../../components/SvgIcon'

class mainMenu extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	clickPath = () => {}
	render() {
		const tabMapOptions = [
			{
				label: '可视化指挥',
				key: '1',
				icon: 'commandMap',
				url: 'commandMap',
				isHover: false,
			},
			{ label: '综合统计', key: '2', icon: 'statistic', url: 'statistics', isHover: false },
			{ label: '档案管理', key: '3', icon: 'otherSta', url: 'otherStatistics', isHover: false },
			{
				label: '基础设置',
				key: '4',
				icon: 'basicSetting',
				url: 'basicSettings/roleManage',
				isHover: false,
			},
		]
		return (
				<div className="pulse-icon">
					<div className="circle">
						{tabMapOptions.map((item, index) => {
							return (
								<div
									className="little-circle"
									onClick={() => {
										this.clickPath()
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
