import React, { Component } from "react";
import 'bootstrap';
import Index from './views';
import Questions from './views/questions';
import Successful from './views/successful';
import NoMatch from './views/404';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <Router>
      <div>
          <Switch>
     <Route exact path="/"  component={Index}/>
     <Route path="/questions"  component={Questions}/>
     <Route path="/successful"  component={Successful}/>
          <Route component={NoMatch} />
          </Switch>
      </div>
      </Router>
    );
  }
}


export default App;
