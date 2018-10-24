import React, { Component } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default App;
