import React from 'react';
import SignIn from '../user/SignIn';
import SignUp from '../user/SignUp';
import Home from './Home';
import Nav from './Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function Body() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
