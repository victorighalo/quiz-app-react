import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Navigation extends Component {

    render() {
        const handleSetActive = (to) => {
            console.log(to);
          }
        return (
<header style={{position:'fixed', width:'100%'}}>  
<nav className="navbar navbar-default">
  <div className="container">
  <div className="row">
  <div className="col-sm-3">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">
        <img alt="Brand" src="..."/>
      </a>
    </div>
    </div>

 <div className="col-sm-9">
    <div className="collapse navbar-collapse pull-right" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li>
        <Link to="red"  activeClass="active" spy={true} smooth={true} offset={50}  duration={500} hashSpy={true} >
        Home</Link> 
        </li>
        <li>
            <Link to="blue" activeClass="active" spy={true} smooth={true} offset={50} hashSpy={true} duration={500}>
           About us
            </Link>
            </li>
        </ul>
        </div>
        </div>
        </div>
  </div>
</nav>
</header>
        
        );
    }
}

export default Navigation;