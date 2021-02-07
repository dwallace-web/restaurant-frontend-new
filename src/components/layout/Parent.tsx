import React, { Component } from 'react';
import UserSignUp from '../user/UserSignUp';
import UserSignIn from '../user/UserSignIn';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import NewHome from './NewHome';
import Navigation from './Navigation';

class Parent extends React.Component {

  //on click function to render the body / visit component / route to update the state?
  render() {
    return (
      <Container>
        <BrowserRouter>
          <Grid container direction="column" justify="center" alignItems="center" spacing={3}         >
            <Grid container item spacing={3}>
              <Navigation />
            </Grid>
            <Grid container item direction="column" justify="center" alignItems="center">
              <Switch>
                <Route exact path="/" component={NewHome} />
                <Route exact path="/signup" component={UserSignUp} />
                <Route exact path="/signin" component={UserSignIn} />
              </Switch>
            </Grid>
          </Grid>
        </BrowserRouter>
      </Container >

    );
  }
}

export default Parent;
