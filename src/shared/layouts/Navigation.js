import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {

render() {
return (
<header>  
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Home</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
      <Link to="/login">Login</Link>
      </li>
      <li className="nav-item active">
      <Link to="/register">Register</Link>
      </li>
      <li className="nav-item active">
      <Link to="/questions">Questions</Link>
      </li>
    </ul>
  </div>
</nav>
</header>
        
 );
  }
}

export default Navigation;