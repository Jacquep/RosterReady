// //this topper is kayla trying to make it work, accept it for now
// import React from "react";

// import { Form } from 'semantic-ui-react';

// // Include the Main React Dependencies
// import ReactDOM from "react-dom";
// import routes from "./config/routes";
// //cut below here




import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//import { Route, Indexroute, Router, browserHistory } from "react-router";
//import ReactDOM from "react-dom";
//import routes from "./config/routes"
 //ReactDOM.render(routes, document.getElementById("App"));


import Main from './components/screens/Main'
import Register from './components/screens/Register'
import PlayerDashboard from './components/screens/PlayerDashboard'
import TeamDashboard from './components/screens/TeamDashboard'


class App extends React.Component {
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

export default App

