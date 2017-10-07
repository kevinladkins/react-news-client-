import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SECTIONS } from '../actions/api';

import { connect } from 'react-redux';

const ROUTES = ['sports', 'weather']

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  buildLinks(name){
    var routeName = name[0].toUpperCase() + name.substring(1)
    return (
      <li
       onClick={() => this.props.changeSection(name)}
       key={routeName}
       className={window.location.pathname == `/${name}` ? 'active' : ''}>
       <Link to={`${name}`}>{routeName}</Link></li>
    )
  }

  render() {
    return (
      <nav className="navbar navbar-default" >
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>

          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              {SECTIONS.map(route => this.buildLinks(route))}
            </ul>
          </div>
        </div>
      </nav>
    )
  }

}


export default Navbar;
