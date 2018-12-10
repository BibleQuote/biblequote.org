import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="navbar navbar-transparent navbar-top" role="navigation">
        <div className="container flex-center">
          <div className="navbar-header">
            <button id="menu-toggle" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar bar1"></span>
            <span className="icon-bar bar2"></span>
            <span className="icon-bar bar3"></span>
            </button>
            <NavLink to='/'>
              <div className="logo-container">
                <div className="logo">
                  <img src="assets/img/bq/logo.png" alt="BibleQuote Logo"/>
                </div>
                <div className="brand">
                  BibleQuote
                </div>
              </div>
            </NavLink>
          </div>
          <div className="collapse navbar-collapse" id="example" >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/#features">
                  <i className="fa fa-list-ol"></i>&nbsp;Возможности
                </a>
              </li>
              <li>
                <a href="/#download">
                  <i className="fa fa-download"></i>&nbsp;Загрузка
                </a>
              </li>
              <li>
                <NavLink to="/repository">
                  <i className="fa fa-book"></i>&nbsp;Репозиторий
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
