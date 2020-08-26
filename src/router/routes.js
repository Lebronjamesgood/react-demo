import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Person from '../views/firstModule/person'
import Men from '../views/secondModule/men'
import RichMen from "../views/secondModule/richMen/richMen"
import PoorMen from '../views/secondModule/poorMen/poorMen'
import Women from '../views/secondModule/women/women'
import LifeCycle from "../views/lifeCycle/lifeCycle"
import UserLogin from "../views/login/userLogin"
import Home from "../views/home/home"

function router(){
  return (
		<Router>
			<Switch>
				{/* <Route path="/" component={UserLogin}></Route> */}
				<Route path="/person" component={Person}></Route>
				<Route
					path="/men"
					render={() => (
						<Men>
							<Route path="/men/richMen" component={RichMen}></Route>
							<Route path="/men/poorMen" component={PoorMen}></Route>
							<Route path="/men/women/:id" component={Women}></Route>
						</Men>
					)}
				></Route>
				<Route path="/login" component={UserLogin}></Route>
				<Route path="/lifeCycle" component={LifeCycle}></Route>
				<Route path="/Home" component={Home}></Route>
				{/* <Redirect path="/login" component={UserLogin}></Redirect> */}
			</Switch>
		</Router>
	)
}
export default router
