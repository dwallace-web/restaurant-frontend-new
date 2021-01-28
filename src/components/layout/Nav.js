import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Grid, Button } from '@material-ui/core';

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      logout: false,
    }
  }
  handleLogout = () => {
    this.setState(previousState => {
      return {
        logout: !previousState.logout
      }
    })
  }

  render() {
    return (
      <div className="navigation" maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item xs={3}>

            <Link to={'/'}>
              <Button variant="contained" color="primary">
                Home
              </Button>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to={'/signup'}>
              <Button variant="contained" color="primary">
                Sign Up
          </Button>
            </Link>
          </Grid>
          <Grid item xs={3}>

            <Link to={'/signin'}>

              <Button variant="contained" color="primary">
                Sign In
            </Button>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to={' '} onClick={
              () => {
                localStorage.clear()
                // this.setState({ logout: true})
                this.handleLogout()
              }}>
              <Button variant="contained" color="primary">
                Log Out
            </Button>
            </Link>
          </Grid>
        </Grid>
        {
          this.state.logout === false ? (
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
