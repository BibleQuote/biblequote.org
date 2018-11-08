import ReactGA from 'react-ga';
import React, { Component } from 'react';
import Main from './Main';
import Footer from './Footer';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);

    this.initializeGA();
  }

  initializeGA() {
    ReactGA.initialize('UA-128935379-1');
    ReactGA.pageview('/');
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <NavBar handleChange={this.handleChange} />
        <Main query={this.state.query} />
        <Footer />
      </div>
    );
  }
}

export default App;
