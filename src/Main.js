import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Tutorial from './Tutorial';
import Repository from './Repository';

class Main extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/tutorial' component={Tutorial} />}/>
        <Route path='/repository' component={Repository} />}/>
        <Redirect to="/" />
      </Switch>
    );
  }
};

export default Main;
