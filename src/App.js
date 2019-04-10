import React, { Component } from 'react';
// import { withRouter } from 'react-router'
// import {Router } from "react-router"
import {BrowserRouter as Router, Route} from "react-router-dom";
// import {browserHistory} from 'react-router';
import Add from './components/Add';
import Home from './components/home';
// import createHistory from 'history/createBrowserHistory'

class App extends Component {

onNavigation = () => {
  this.context.history.push("/add");
}

  render() {
    return (
      <div className="d-main">

      <Router>
        
          <Route path="/add" component ={Add}/>
          <Route path="/" exact={true} component ={Home}/>
      </Router>
      </div>
        );
  }
}

export default App;
