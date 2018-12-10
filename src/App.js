import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Main from './Main';
import Footer from './Footer';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.initializeGA();
  }

  initializeGA() {
    ReactGA.initialize('UA-128935379-1');
    ReactGA.pageview('/');
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
