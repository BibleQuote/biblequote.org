import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-transparent navbar-top" role="navigation">
          <div class="container">
            <div class="navbar-header">
              <button id="menu-toggle" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar bar1"></span>
              <span class="icon-bar bar2"></span>
              <span class="icon-bar bar3"></span>
              </button>
              <a href="http://www.creative-tim.com">
                <div class="logo-container">
                  <div class="logo">
                    <img src="assets/img/new_logo.png" alt="Creative Tim Logo"/>
                  </div>
                  <div class="brand">
                    Creative Tim
                  </div>
                </div>
              </a>
            </div>
            <div class="collapse navbar-collapse" id="example" >
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="#">
                  <i class="fa fa-facebook-square"></i>
                  Like
                  </a>
                </li>
                <li>
                  <a href="#">
                  <i class="fa fa-twitter"></i>
                  Tweet
                  </a>
                </li>
                <li>
                  <a href="#">
                  <i class="fa fa-pinterest"></i>
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
        <div className="section section-demo">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="demo-image">
                  <img src="assets/img/showcases/showcase-2/examples/home_4.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-5 col-md-offset-1">
                <h4 className="header-text">Beautiful colors</h4>
                <p>
                  Each color has a strong pigment and was chosen to make your design shine. Each component from our product can have one of these colors. Try on different combinations and be sure that everything works together.
                </p>
                <p>
                  PSD Custom focuses on conveying the attention of your users to the important parts of the page and the actions. While keeping a light feel, the colors give the page an extra push.
                </p>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-md-5">
                <h4 className="header-text">Pixel Perfect</h4>
                <p>
                  Each color has a strong pigment and was chosen to make your design shine. Each component from our product can have one of these colors. Try on different combinations and be sure that everything works together.
                </p>
                <p>
                  PSD Custom focuses on conveying the attention of your users to the important parts of the page and the actions. While keeping a light feel, the colors give the page an extra push.
                </p>
              </div>
              <div className="col-md-6 col-md-offset-1">
                <div className="demo-image">
                  <img src="assets/img/showcases/showcase-2/examples/home_6.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-features">
          <div className="container">
            <h4 className="header-text text-center">Features</h4>
            <div className="row">
              <div className="col-md-3">
                <div className="card card-blue">
                  <div className="icon">
                    <i className="pe-7s-pen"></i>
                  </div>
                  <div className="text">
                    <h4>Client-Perfect Draws</h4>
                    <p>All appointments sync with your Google calendar so your availability is always up to date. See your schedule at a glance from any device.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card-blue">
                  <div className="icon">
                    <i className="pe-7s-look"></i>
                  </div>
                  <h4>Retina Ready</h4>
                  <p>Automatic text and email reminders make sure customers always remember their upcoming appointments.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card-blue">
                  <div className="icon">
                    <i className="pe-7s-like"></i>
                  </div>
                  <h4>You'll love it</h4>
                  <p>You'll Love It, you will find dining room sets, couches, chairs and pre-owned furniture of all kinds as well as lamps, rugs and accessories.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card-blue">
                  <div className="icon">
                    <i className="pe-7s-piggy"></i>
                  </div>
                  <h4>Big Discount</h4>
                  <p>Take payments and run your business on the go, in your store and then see how it all adds up with analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-testimonial">
          <div className="container">
            <h4 className="header-text text-center">What people think</h4>
            <div id="carousel-example-generic" className="carousel fade" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="item">
                  <div className="mask">§
                    <img src="assets/img/faces/face-4.jpg" />
                  </div>
                  <div className="carousel-testimonial-caption">
                    <p>Jay Z, Producer</p>
                    <h3>"I absolutely love your app! It's truly amazing and looks awesome!"</h3>
                  </div>
                </div>
                <div className="item active">
                  <div className="mask">
                    <img src="assets/img/faces/face-3.jpg" />
                  </div>
                  <div className="carousel-testimonial-caption">
                    <p>Drake, Artist</p>
                    <h3>"This is one of the most awesome apps I've ever seen! Wish you luck Creative Tim!"</h3>
                  </div>
                </div>
                <div className="item">
                  <div className="mask">
                    <img src="assets/img/faces/face-2.jpg" />
                  </div>
                  <div className="carousel-testimonial-caption">
                    <p>Rick Ross, Musician</p>
                    <h3>"Loving this! Just picked it up the other day. Thank you for the work you put into this."</h3>
                  </div>
                </div>
              </div>
              <ol className="carousel-indicators carousel-indicators-blue">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </div>
        <div className="section section-no-padding">
          <div className="parallax filter-gradient blue" data-color="blue">
            <div className="parallax-background">
              <img className="parallax-background-image" src="assets/img/showcases/showcase-2/bg2.jpg" />
            </div>
            <div className="info">
              <h1>Download this landing page for free!</h1>
              <p>Beautiful multipurpose bootstrap landing page.</p>
              <a href="http://www.creative-tim.com/product/awesome-landing-page" className="btn btn-neutral btn-lg btn-fill">DOWNLOAD</a>
            </div>
          </div>
        </div>
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
      </div>
      </div>
    );
  }
}

export default App;
