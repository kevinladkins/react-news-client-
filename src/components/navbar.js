import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SECTIONS } from '../actions/api'

const buildLinks = (name) => {
  var routeName = name[0].toUpperCase() + name.substring(1)
  return (
    <li
     className={window.location.pathname == `/${name}` ? 'active' : ''}
    ><Link to={`${name}`}>{routeName}</Link></li>
  )
}

const ROUTES = ['sports', 'weather']

class Navbar extends Component {

  render() {
    console.log(window.location.pathname.split('/'))
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
              {SECTIONS.map(route => buildLinks(route))}
            </ul>
          </div>
        </div>
      </nav>
    )
  }

}

export default Navbar;
