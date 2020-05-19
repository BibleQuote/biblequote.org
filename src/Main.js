import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Tutorial from './Tutorial';
import Repository from './Repository';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/tutorial' component={Tutorial} />}/>
      <Route path='/repository' component={Repository} />}/>
      <Redirect to="/" />
    </Switch>
  );
};

export default Main;
