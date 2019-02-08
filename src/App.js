import React, { Component } from "react";
import 'bootstrap';
import index from './views';
import questions from './views/questions';
import successful from './views/successful';
import {BrowserRouter as Router, Route} from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <Router>
      <div>
     <Route exact path="/"  component={index}/>
     <Route path="/questions"  component={questions}/>
     <Route path="/successful"  component={successful}/>
      </div>
      </Router>
    );
  }
}

export default App;
