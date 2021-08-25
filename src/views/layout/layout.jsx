import React, { Component } from 'react'
import './index.less'
import Header from "./../../components/header/header"
import debounce from "lodash/debounce"
import store from '../../store/store'
import {Spin} from 'antd'
import actionType from '../../store/reducerModule/loading/actionType.js'

class layout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showHeader: true,
			scale: this.getScale(),
			loading: false
		}
	}
	componentDidMount() {
		 store.subscribe(() => {
		  let storeState = store.getState()
		  this.setState({
				loading: storeState.changeLoadingStatus.loadingStatus,
			})
		})
	}
	getScale = () => {
		const { width = 1920, height = 1080 } = this.props
		let ww = window.innerWidth / width
		let wh = window.innerHeight / height
		return ww < wh ? ww : wh
	}

	setScale = debounce(() => {
		let scale = this.getScale()
		this.setScale({ scale })
	}, 500)
	
	bodyClick() {
    let loadingStatus = store.getState().changeLoadingStatus.loadingStatus
    loadingStatus
			? store.dispatch({ type: actionType.CLOSE_PAGE_LOADING })
			: store.dispatch({ type: actionType.OPEN_PAGE_LOADING })
	}
	render() {
		const { width = 1920, height = 1080 } = this.props
		return (
			<div className="layout">
				<div
					className={[`scale-box`]}
					onClick={this.bodyClick.bind(this)}
					style={{
						transform: `scale(${this.state.scale}) translate(-50%, -50%)`,
						WebkitTransform: `scale(${this.state.scale}) translate(-50%, -50%)`,
						width,
						height,
					}}
				>
					<Header isSHow={this.state.showHeader} />
					<Spin spinning={this.state.loading} delay={500}>
						<div className="container">{this.props.children}</div>
					</Spin>
				</div>
			</div>
		)
	}

	// componentWillUnmount() {
	//   // window.removeEventListener('resize', this.setScale)
	//   this.setState = ()=>false;
	// }
}

export default layout
