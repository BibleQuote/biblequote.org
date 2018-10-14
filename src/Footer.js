import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#">
                Home
                </a>
              </li>
              <li>
                <a href="#">
                Company
                </a>
              </li>
              <li>
                <a href="#">
                Portfolio
                </a>
              </li>
              <li>
                <a href="#">
                Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="social-area pull-right">
            <a className="btn btn-social btn-facebook btn-simple">
            <i className="fa fa-facebook-square"></i>
            </a>
            <a className="btn btn-social btn-twitter btn-simple">
            <i className="fa fa-twitter"></i>
            </a>
            <a className="btn btn-social btn-pinterest btn-simple">
            <i className="fa fa-pinterest"></i>
            </a>
          </div>
          <div className="copyright">
            &copy; 2016 <a href="http://www.creative-tim.com">Creative Tim</a>, made with love
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
