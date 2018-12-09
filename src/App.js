import React, { Component } from "react";
import Navigation from "./shared/layouts/Navigation";
import $ from 'jquery';
import 'bootstrap';
import index from './views';
import login from './views/auth/login';
import register from './views/auth/register';
import questions from './views/questions';
import {BrowserRouter as Router, Route} from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Navigation />
     <Route exact path="/"  component={index}/>
     <Route path="/login"  component={login}/>
     <Route path="/register"  component={register}/>
     <Route path="/questions"  component={questions}/>
      </div>
      </Router>
    );
  }
}

export default App;
