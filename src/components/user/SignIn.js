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
import API_URL from '../../helpers/environment';
import { Typography, TextField, Button } from '@material-ui/core'

export class SignIn extends Component {
  //this will be a class component

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }

  signIn = (e) => {
    e.preventDefault();

    const input = {
      email: this.email,
      password: this.password,
    };

    fetch(`${API_URL}/user/signin`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.login === true) {
          localStorage.setItem(
            'token',
            JSON.stringify({
              login: true,
              token: data.sessionToken,
              admin: data.user.restaurantowner,
            })

          );
          this.setState({ active: true })
        } else {
          throw Error(data.error);
        }
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Typography>Welcome back. Please sign-in: </Typography>
        <form onSubmit={this.signIn}>
          <TextField
            placeholder="email"
            type="text"
            name="email"
            onChange={(e) => (this.email = e.target.value)}
          />
          <TextField
            placeholder="password"
            type="password"
            name="password"
            onChange={(e) => (this.password = e.target.value)}
          />
          <Button type="submit"> Sign In </Button>
        </form>
        {
          this.state.active === true ? (
            <div>
              <Redirect to="/" />
            </div>
          )
            :
            ''
        }
      </div>
    );
  }
}

export default SignIn;
