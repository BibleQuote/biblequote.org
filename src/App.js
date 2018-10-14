import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="sections">
        <div className="section section-gray section-clients">
          <div className="container text-center">
            <h4 className="header-text">Happy Customers</h4>
            <p>
              Designing in Photoshop became a trend. Change, save, redo. Change, save, redo. After searching thoroughly for an alternative to create something great, it was clear that there weren’t any great solutions or intentions by anyone to create a pixel-perfect template for anyone to use. We don't do pixel-perfect, we focus on client-perfect projects.<br/>
            </p>
            <div className="logos">
              <ul className="list-unstyled">
                  <li ><img src="assets/img/logos/adobe.png"/></li>
                  <li ><img src="assets/img/logos/zendesk.png"/></li>
                  <li ><img src="assets/img/logos/ebay.png"/></li>
                  <li ><img src="assets/img/logos/evernote.png"/></li>
                  <li ><img src="assets/img/logos/airbnb.png"/></li>
                  <li ><img src="assets/img/logos/zappos.png"/></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section section-presentation">
          <div className="container">
            <div class="row">
              <div class="col-md-5 hidden-xs">
                <div class="description">
                  <h4 class="header-text">It's beautiful</h4>
                  <p>This pack is a demo of our latest product. You can download it and use it in any project of yours. By downloading the resource with a Personal License you are granted the use of it under the conditions featured in the above table. Ownership stays with Creative Tim, along with the copyright holders and you must abide the following rights and restrictions. </p>
                  <p>Rights:</p>
                  <p />
                  <ol>
                    <li>You have rights for royalty free use of our resources for your personal project.</li>
                    <li>You may modify the resources according to your requirements and use them royalty free for your personal project. For example, you may include this resource in a website you will be designing for you. </li>
                    <li>You are not required to attribute or link to <a href="http://www.creative-tim.com">Creative Tim</a> in project.</li>
                  </ol>
                </div>
              </div>
              <div class="col-md-6 ">
                <img src="assets/img/showcases/showcase-2/mac2.png" style={{marginTop:'-50px'}}/>
              </div>
            </div>
          </div>
      </div>
        <div class="section section-demo">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="demo-image">
                  <img src="assets/img/showcases/showcase-2/examples/home_4.jpg" alt="" />
                </div>
              </div>
              <div class="col-md-5 col-md-offset-1">
                <h4 class="header-text">Beautiful colors</h4>
                <p>
                  Each color has a strong pigment and was chosen to make your design shine. Each component from our product can have one of these colors. Try on different combinations and be sure that everything works together.
                </p>
                <p>
                  PSD Custom focuses on conveying the attention of your users to the important parts of the page and the actions. While keeping a light feel, the colors give the page an extra push.
                </p>
              </div>
            </div>
            <br/>
            <div class="row">
              <div class="col-md-5">
                <h4 class="header-text">Pixel Perfect</h4>
                <p>
                  Each color has a strong pigment and was chosen to make your design shine. Each component from our product can have one of these colors. Try on different combinations and be sure that everything works together.
                </p>
                <p>
                  PSD Custom focuses on conveying the attention of your users to the important parts of the page and the actions. While keeping a light feel, the colors give the page an extra push.
                </p>
              </div>
              <div class="col-md-6 col-md-offset-1">
                <div class="demo-image">
                  <img src="assets/img/showcases/showcase-2/examples/home_6.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section section-features">
          <div class="container">
            <h4 class="header-text text-center">Features</h4>
            <div class="row">
              <div class="col-md-3">
                <div class="card card-blue">
                  <div class="icon">
                    <i class="pe-7s-pen"></i>
                  </div>
                  <div class="text">
                    <h4>Client-Perfect Draws</h4>
                    <p>All appointments sync with your Google calendar so your availability is always up to date. See your schedule at a glance from any device.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card card-blue">
                  <div class="icon">
                    <i class="pe-7s-look"></i>
                  </div>
                  <h4>Retina Ready</h4>
                  <p>Automatic text and email reminders make sure customers always remember their upcoming appointments.</p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card card-blue">
                  <div class="icon">
                    <i class="pe-7s-like"></i>
                  </div>
                  <h4>You'll love it</h4>
                  <p>You'll Love It, you will find dining room sets, couches, chairs and pre-owned furniture of all kinds as well as lamps, rugs and accessories.</p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card card-blue">
                  <div class="icon">
                    <i class="pe-7s-piggy"></i>
                  </div>
                  <h4>Big Discount</h4>
                  <p>Take payments and run your business on the go, in your store and then see how it all adds up with analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section section-testimonial">
          <div class="container">
            <h4 class="header-text text-center">What people think</h4>
            <div id="carousel-example-generic" class="carousel fade" data-ride="carousel">
              <div class="carousel-inner" role="listbox">
                <div class="item">
                  <div class="mask">§
                    <img src="assets/img/faces/face-4.jpg" />
                  </div>
                  <div class="carousel-testimonial-caption">
                    <p>Jay Z, Producer</p>
                    <h3>"I absolutely love your app! It's truly amazing and looks awesome!"</h3>
                  </div>
                </div>
                <div class="item active">
                  <div class="mask">
                    <img src="assets/img/faces/face-3.jpg" />
                  </div>
                  <div class="carousel-testimonial-caption">
                    <p>Drake, Artist</p>
                    <h3>"This is one of the most awesome apps I've ever seen! Wish you luck Creative Tim!"</h3>
                  </div>
                </div>
                <div class="item">
                  <div class="mask">
                    <img src="assets/img/faces/face-2.jpg" />
                  </div>
                  <div class="carousel-testimonial-caption">
                    <p>Rick Ross, Musician</p>
                    <h3>"Loving this! Just picked it up the other day. Thank you for the work you put into this."</h3>
                  </div>
                </div>
              </div>
              <ol class="carousel-indicators carousel-indicators-blue">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </div>
        <div class="section section-no-padding">
          <div class="parallax filter-gradient blue" data-color="blue">
            <div class="parallax-background">
              <img class="parallax-background-image" src="assets/img/showcases/showcase-2/bg2.jpg" />
            </div>
            <div class="info">
              <h1>Download this landing page for free!</h1>
              <p>Beautiful multipurpose bootstrap landing page.</p>
              <a href="http://www.creative-tim.com/product/awesome-landing-page" class="btn btn-neutral btn-lg btn-fill">DOWNLOAD</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
