/*
 * @Files: 
 * @Version: 1.0
 * @Author: zhengjiangwei
 * @Date: 2020-08-24 19:33:28
 * @LastEditors: zhengjiangwei
 * @LastEditTime: 2021-08-18 15:33:20
 */
import React from "react"
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom'
import Person from '../views/secondModule/person/person'
import Men from '../views/secondModule/men'
import RichMen from "../views/secondModule/richMen/richMen"
import PoorMen from '../views/secondModule/poorMen/poorMen'
import Women from '../views/secondModule/women/women'
import LifeCycle from "../views/lifeCycle/lifeCycle"
import UserLogin from "../views/login/userLogin"
import Home from "../views/home/home"
import Layout from  "../views/layout/layout"
import PersonColor from "../views/secondModule/person/whitePerson/personColor"
import ContextTest from "../views/firstModule/contextTest/contextTest"
import Portals from  "../views/firstModule/portals/portals"
import Refs from '../views/firstModule/refs/refs' 
import Example from "../views/firstModule/Hook/example"
import GameLIst  from "../views/redux/list"

function router(){
  return (
		<HashRouter>
			<Switch>
				<Route path="/login" component={UserLogin}></Route>
				{/* <Route path="/Home" component={Home}></Route> */}
				<Route
					path="/layout"
					render={() => (
						<Layout>
              <Route path="/layout/Home" component={Home}></Route>
							<Route path="/layout/lifeCycle" component={LifeCycle}></Route>
							<Route path="/layout/person" component={Person}></Route>
							<Route path="/layout/personColor" component={PersonColor}></Route>
							<Route path="/layout/contextTest" component={ContextTest}></Route>
							<Route path="/layout/refs" component={Refs}></Route>
							<Route path="/layout/example" component={Example}></Route>
							<Route path="/layout/GameLIst" component={GameLIst}></Route>
							{/* <Route path="/layout/portals" component={Portals}></Route> */}
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
				<Redirect from="/" exact to="login"></Redirect>
			</Switch>
		</HashRouter>
	)
}
export default router
