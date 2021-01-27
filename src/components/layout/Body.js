import React , { Component } from 'react';
import SignIn from '../user/SignIn';
import SignUp from '../user/SignUp';
import Home from './Home';
import Nav from './Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export class Body extends Component {

  constructor(props) {
    super(props)
    this.state = {
      login: false,
      admin: false,
      token: JSON.parse(localStorage.getItem('token'))?.token || '',
    };
  }

  componentDidMount() {
    this.tokenFinder(); //get the token & find out if a user is an admin
  }

  tokenFinder() {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token && token.login && token.admin === true) {
      this.setState({
        login: true,
        admin: true,
        token: JSON.parse(localStorage.getItem('token')).token,
      });
    } else if (token && token.login === true) {
      this.setState({
        login: true,
        token: JSON.parse(localStorage.getItem('token')).token,
      });
    } else {
      this.setState({ login: false, admin: false });
    }
  }

  render () {
      return (
        <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={ (props) => <Home {...props} login={this.state.login} token={this.state.token} admin={this.state.admin} /> } />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
            </Switch>        
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Body;
