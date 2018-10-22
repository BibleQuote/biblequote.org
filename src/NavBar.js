import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <nav className="navbar navbar-transparent navbar-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button id="menu-toggle" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar bar1"></span>
            <span className="icon-bar bar2"></span>
            <span className="icon-bar bar3"></span>
            </button>
            <Link to='/'>
              <div className="logo-container">
                <div className="logo">
                  <img src="assets/img/new_logo.png" alt="Creative Tim Logo"/>
                </div>
                <div className="brand">
                  BibleQuote
                </div>
              </div>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="example" >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to='/repository'>
                  <i className="fa fa-book"></i>&nbsp;
                  Modules
                </Link>
              </li>
              {/* <li>
                <a href="#">
                <i className="fa fa-twitter"></i>
                Tweet
                </a>
              </li>
              <li>
                <a href="#">
                <i className="fa fa-pinterest"></i>
                Pin
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
