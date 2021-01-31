import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
} from "react-router-dom";
import { Grid, Button, Typography } from '@material-ui/core';

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
      <Grid container justify="center">
        <Grid container item lg={4} justify="center">
          <Grid item>
            <Typography variant="h2">Restaurant Reviews Demo </Typography>
          </Grid>
        </Grid>
        <Grid container item lg={8} align="center">
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
            <Link onClick={
              () => {
                localStorage.clear()
                // this.setState({ logout: true})
                this.handleLogout()
              }}>
              <Button variant="outlined" color="secondary" disableElevation>
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
      </Grid>
    );
  }
}

export default Nav;
