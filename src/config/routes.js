// import React from "react";
// import { Route, Router, browserHistory } from "react-router";
// //import { BrowserRouter as Router, Route} from 'react-router-dom';

// import Main from "../components/screens/Main";
// import Register from "../components/screens/Register";
// import PlayerDashboard from "../components/screens/PlayerDashboard";
// import TeamDashboard  from "../components/screens/TeamDashboard";
// //import LoginContainer from "../passport-client/components/container/LoginContainer";
// //import GameTable from "../components/GameTable"

// const NotFound = () => (
//   <h1>404.. This page is not found!</h1>)

// const routes = (
//   <Router history={browserHistory}>
//     <Route path="/" component={Main}>
//     <Route path="Register" component={Register} />
//     <Route path="Team" component={TeamDashboard} />
//     <Route path="PlayerDashboard" component={PlayerDashboard} />
 

//     <Route path='*' component={NotFound} />

//     </Route>
//   </Router>
// );

import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
//import { Route, Indexroute, Router, browserHistory } from "react-router";
// import ReactDOM from "react-dom";
// import routes from "./config/routes"

// ReactDOM.render(routes, document.getElementById("app"));
import Main from './components/screens/Main'
import Register from './components/screens/Register'
import PlayerDashboard from './components/screens/PlayerDashboard'
import TeamDashboard from './components/screens/TeamDashboard'


class routes extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path='/' component={Main} />
          <Route path='/register' component={Register} />
          <Route path='/player' component={PlayerDashboard} />
          <Route path='/team' component={TeamDashboard} />
        </div>
      </Router>
    )
  }
}

export default routes;