import React, { Component } from 'react';

class Parallax extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
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
    );
  }
}

export default Parallax;
