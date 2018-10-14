import React, { Component } from 'react';
import Home from './Home';
import Footer from './Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-transparent navbar-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button id="menu-toggle" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar bar1"></span>
              <span className="icon-bar bar2"></span>
              <span className="icon-bar bar3"></span>
              </button>
              <a href="http://www.creative-tim.com">
                <div className="logo-container">
                  <div className="logo">
                    <img src="assets/img/new_logo.png" alt="Creative Tim Logo"/>
                  </div>
                  <div className="brand">
                    Creative Tim
                  </div>
                </div>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="example" >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#">
                  <i className="fa fa-facebook-square"></i>
                  Like
                  </a>
                </li>
                <li>
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
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="wrapper">
        <div className="parallax filter-gradient blue" data-color="blue">
          <div className= "container">
            <div className="row">
              <div className="col-md-7  hidden-xs">
                <div className="parallax-image">
                  <img src="assets/img/showcases/showcase-2/mac1.png"/>
                </div>
              </div>
              <div className="col-md-5">
                <div className="description text-center">
                  <h2>Showcase 2 - Your webapp</h2>
                  <br/>
                  <h5>This template was built closely to our current layout as of June 2016. You can download a free demo below. Please share the webpage with others. Hope this template makes a good preview of what we are building here!</h5>
                  <div className="buttons">
                    <a href="http://www.creative-tim.com/product/awesome-landing-page" className="btn btn-fill btn-neutral">
                    <i className="fa fa-download"></i> Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Home />
        <Footer />
      </div>
      </div>
    );
  }
}

export default App;
