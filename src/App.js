import React, { Component } from 'react';
import Home from './Home';
import Footer from './Footer';
import NavBar from './NavBar';
import Parallax from './Parallax';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Parallax />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
