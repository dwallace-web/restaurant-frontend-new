import React, { Component } from 'react';
import SignIn from '../user/SignIn';
import SignUp from '../user/SignUp';
import Home from './Home';
import Nav from './Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

export class Body extends Component {



  //use component did update to check the state of the login
  //componentDidUpdate( ) is called after componentDidMount() and can be useful to perform some action when the state changes.
  /*   componentDidUpdate(prevProps, prevState) {
      if(prevState.PROP !== this.state.PROP) {
        console.log('hello world --- this is where token finder should run')
      }
    } */
  // STEPS:
  // componentDidUpdate() takes as its first two arguments the previous props and the previous state.
  // Inside the method we can check if a condition is met and perform an action based on it.
  // For example, in the code below we check if the previous state and the current state are different. If they are, the console log statement will be run.
  // When do we use componentDidUpdate()?
  // An example of when to use componentDidUpdate() is when we need to call an external API on condition that the previous state and the current state have changed.
  // The call to the API would be conditional to the state being changed. If there is no state change, no API is called.
  // To avoid an infinite loop, the API call needs to be inside a conditional statement.


  //on click function to render the body / visit component / route to update the state?
  render() {
    return (
      <Container maxWidth="lg">
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              {/* <Route exact path="/" 
              component={ (props) => <Home {...props} login={this.state.login} token={this.state.token} admin={this.state.admin} tokenFinder={this.tokenFinder}  /> }
              /> */}
              {/* <Route exact path="/signup" component={ (props) => <SignUp {...props} login={this.state.login} token={this.state.token} admin={this.state.admin} tokenFinder={this.tokenFinder} /> } /> */}
              {/* <Route exact path="/signin" component={ (props) => <SignIn {...props} login={this.state.login} token={this.state.token} admin={this.state.admin} tokenFinder={this.tokenFinder} /> } /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </Container>

    );
  }
}

export default Body;
