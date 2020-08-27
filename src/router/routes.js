import React from "react"
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
import Person from '../views/secondModule/person/person'
import Men from '../views/secondModule/men'
import RichMen from "../views/secondModule/richMen/richMen"
import PoorMen from '../views/secondModule/poorMen/poorMen'
import Women from '../views/secondModule/women/women'
import LifeCycle from "../views/lifeCycle/lifeCycle"
import UserLogin from "../views/login/userLogin"
import Home from "../views/home/home"
import Layout from  "../views/layout/layout"

function router(){
  return (
		<Router>
			<Switch>
				<Redirect path="/login" component={UserLogin}></Redirect>
				<Route path="/login" component={UserLogin}></Route>
				<Route path="/Home" component={Home}></Route>
				<Route
					path="/layout"
					render={() => (
						<Layout>
							<Route path="/layout/lifeCycle" component={LifeCycle}></Route>
							<Route path="/layout/person" component={Person}></Route>
							<Route
								path="/layout/men"
								render={() => (
									<Men>
										<Route path="/men/richMen" component={RichMen}></Route>
										<Route path="/men/poorMen" component={PoorMen}></Route>
										<Route path="/men/women/:id" component={Women}></Route>
									</Men>
								)}
							></Route>
						</Layout>
					)}
				></Route>
			</Switch>
		</Router>
	)
}
export default router
