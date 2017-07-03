import React from "react";
import { Route, Router, browserHistory } from "react-router";
//import { BrowserRouter as Router, Route} from 'react-router-dom';

import Main from "../components/screens/Main";
import Register from "../components/screens/Register";
import PlayerDashboard from "../components/screens/PlayerDashboard";
import TeamDashboard  from "../components/screens/TeamDashboard";
//import LoginContainer from "../passport-client/components/container/LoginContainer";
//import GameTable from "../components/GameTable"

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    <Route path="Register" component={Register} />
    <Route path="Team" component={TeamDashboard} />
    <Route path="PlayerDashboard" component={PlayerDashboard} />
 

    <Route path='*' component={NotFound} />

    </Route>
  </Router>
);



export default routes;