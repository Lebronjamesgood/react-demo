import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Person from '../views/firstModule/person'
import Men from '../views/secondModule/men'
import RichMen from "../views/secondModule/richMen/richMen"
import PoorMen from '../views/secondModule/poorMen/poorMen'
import Women from '../views/secondModule/women/women'
import LifeCycle from "../views/lifeCycle/lifeCycle"

function router(){
  return (
		<Router>
			<Switch>
				{/* <Route path="/" component={App}></Route> */}
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
				<Route path="/lifeCycle" component={LifeCycle}></Route>
				{/* <Redirect path="/*" to="/person" ></Redirect> */}
			</Switch>
		</Router>
	)
}
export default router

// export const mapActionsRoutes = [
//   {
//     path: '/',
//     component: App,
//   },
//   {
//     path: '/person',
//     component: Person,
//   },
//   {
//     path: '/men',
//     component: Men,
//     children: [
//       {
//         path: '/men/richMen',
//         component: RichMen,
//       },
//       {
//         path: '/men/poorMen',
//         component: PoorMen,
//       },
//     ],
//   },
// ]