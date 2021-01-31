import React, { Component } from 'react';
import SignIn from '../user/SignIn';
import SignUp from '../user/SignUp';
import Home from './Home';
import Nav from './Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import CustomerBio from '../customer-view/CustomerBio';

export class Body extends Component {

  //on click function to render the body / visit component / route to update the state?
  render() {
    return (
      <Container>
        <BrowserRouter>
          <Grid container justify="center">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              {/* <Route exact path="/mycomments" component={CustomerBio} /> */}
              {/* <Route exact path="/" 
              component={ (props) => <Home {...props} login={this.state.login} token={this.state.token} admin={this.state.admin} tokenFinder={this.tokenFinder}  /> }
              /> */}
              {/* <Route exact path="/signup" component={ (props) => <SignUp {...props} login={this.state.login} token={this.state.token} admin={this.state.admin} tokenFinder={this.tokenFinder} /> } /> */}
              {/* <Route exact path="/signin" component={ (props) => <SignIn {...props} login={this.state.login} token={this.state.token} admin={this.state.admin} tokenFinder={this.tokenFinder} /> } /> */}
            </Switch>
          </Grid>
        </BrowserRouter>
      </Container>

    );
  }
}

export default Body;
