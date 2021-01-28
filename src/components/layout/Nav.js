import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      logout: false,
    }
  }
  
  render() {
    return (
      <div>
        <Link to={'/'}>Home</Link> <Link to={'/signup'}>Sign Up</Link>{' '}
        <Link to={'/signin'}>Sign In</Link>{' '}
        <Link to={' '} onClick={
          () => {localStorage.clear()
          this.setState({ logout: true})
       }}>
          Log Out
        </Link>
        {
            this.state.logout === true ? (
              <div>
                <Redirect to="/" />
              </div>
            )
            :
            <div>
                <Redirect to="/signin" />
              </div>
          }
      </div>
    );
  }
}

export default Nav;
