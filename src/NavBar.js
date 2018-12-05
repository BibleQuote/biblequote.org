import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <nav className="navbar navbar-transparent navbar-top" role="navigation">
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
                  <img src="assets/img/bq_logo.png" alt="Creative Tim Logo"/>
                </div>
                <div className="brand">
                  BibleQuote
                </div>
              </div>
            </NavLink>
          </div>
          <div className="modules-search-input">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Поиск модулей..."
                aria-describedby="basic-addon" onChange={this.props.handleChange}/>
              <span className="input-group-addon" id="basic-addon">43</span>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="example" >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to='/repository'>
                  <i className="fa fa-book"></i>&nbsp;
                  Модули
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
