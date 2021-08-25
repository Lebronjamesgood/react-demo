import React, { Component } from 'react'
import { Button, Input, Form, Checkbox, Card } from 'antd'
import './login.less'

class login extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const onFinish = values => {
			console.log('Success:', values)
			this.props.route.history.push({ pathname: '/layout/home' })
		}

		const onFinishFailed = errorInfo => {
			console.log('Failed:', errorInfo)
		}
		const layout = {
			labelCol: {
				span: 8,
			},
			wrapperCol: {
				span: 16,
			},
		}
		const tailLayout = {
			wrapperCol: {
				offset: 8,
				span: 16,
			},
		}
		return (
			<div className="login-box">
				<Card title="登  录" className="login-form">
					<Form
						{...layout}
						name="basic"
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							label="Username"
							name="username"
							rules={[
								{
									required: true,
									message: 'Please input your username!',
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[
								{
									required: true,
									message: 'Please input your password!',
								},
							]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item {...tailLayout} name="remember" valuePropName="checked">
							<Checkbox>Remember me</Checkbox>
						</Form.Item>

						<Form.Item {...tailLayout}>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Card>
			</div>
		)
	}
}

export default login
