import React, { Component } from 'react';
import SignIn from '../user/SignIn';
import SignUp from '../user/SignUp';
import UserSignUp from '../user/UserSignUp';
import UserSignIn from '../user/UserSignIn';
import Nav from './Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import NewHome from './NewHome';

class Parent extends React.Component {

  //on click function to render the body / visit component / route to update the state?
  render() {
    return (
      <Container>
        <BrowserRouter>
          <Grid container direction="column" justify="center" alignItems="center" spacing={3}         >
            <Grid container item spacing={3}>
              <Nav />
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
