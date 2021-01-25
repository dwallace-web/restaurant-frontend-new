import React, { Component } from 'react';
import { BrowserRouter, Switch, Link } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>Home</Link> <Link to={'/signup'}>Sign Up</Link>{' '}
        <Link to={'/signin'}>Sign In</Link>{' '}
        <Link to={' '} onClick={() => localStorage.clear()}>
          Log Out
        </Link>
      </div>
    );
  }
}

export default Nav;
