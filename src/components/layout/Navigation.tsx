import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
} from "react-router-dom";
import { Grid, Button, Typography } from '@material-ui/core';

type NavigationProps = {

}
type NavigationState = {
  logout: boolean; 
}

class Navigation extends React.Component <NavigationProps, NavigationState> {
  
  constructor(props: NavigationProps) {
    super(props);
    this.state = {
      logout: false,
    }
  }

  handleLogout = () => {
    localStorage.clear()
    console.log('user logged out')
    this.setState(previousState => {
      return {
        logout: !previousState.logout
      }
    })
  }
  
  render() {
    return (
      <Grid container justify="center" spacing={6}>
        <Grid container item md={4} justify="center">
          <Grid item>
            <Typography variant="h2">Restaurant Reviews Demo </Typography>
          </Grid>
        </Grid>
        <Grid container item md={8} alignItems="center" direction="row" justify="center" spacing={4}>
          <Grid item >
            <Link to={'/'}>
              <Button variant="contained" color="primary">
                Home
              </Button>
            </Link>
          </Grid>
          <Grid item >
            <Link to={'/signup'}>
              <Button variant="contained" color="primary">
                Sign Up
          </Button>
            </Link>
          </Grid>
          <Grid item >
            <Link to={'/signin'}>
              <Button variant="contained" color="primary">
                Sign In
            </Button>
            </Link>
          </Grid>
          <Grid item >
            <Link to={'/signin'} onClick={() => {this.handleLogout()}}>
              <Button variant="contained" color="secondary" disableElevation>
                Log Out
              </Button>
            </Link>
          </Grid>
        </Grid>
        {this.state.logout === false ? (
              <Redirect to="/" />
          )
            :
              <Redirect to="/signin" />
        }
      </Grid>
    );
  }
}

export default Navigation;
