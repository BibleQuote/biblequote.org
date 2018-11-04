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
