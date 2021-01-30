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
import { Typography, TextField, Button } from '@material-ui/core'

import API_URL from '../../helpers/environment';

export class SignUp extends Component {
  //this will be a class component

  constructor() {
    super();
    this.state = {
      restaurantowner: false,
      login: false,
    }
  }

  register = (e) => {
    e.preventDefault();

    const input = {
      email: this.email,
      password: this.password,
      username: this.username,
      phonenumber: this.phonenumber,
      restaurantowner: this.restaurantowner,
    };

    fetch(`${API_URL}/user/signup`, {
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
          this.setState({ login: true })

          console.log('done');
        } else {
          throw Error(data.error);
        }
      })
      .catch((error) => {
        alert('Something went wrong, please try again!');
        console.log(error);
      });
  };

  render() {


    return (

      <div>
        <Typography>Create Your Account:</Typography>
        <form onSubmit={this.register}>
          <TextField
            placeholder="email"
            type="email"
            // value={this.state.email}
            name="email"
            required
            // onChange={(data) => {
            //   this.setState({ email: data.target.value });
            // }}
            onChange={(e) => (this.email = e.target.value)}
          />
          <TextField
            placeholder="username"
            type="text"
            // value={this.state.username}
            name="username"
            minLength="4"
            required
            // onChange={(data) => {
            //   this.setState({ username: data.target.value || '' });
            // }}
            onChange={(e) => (this.username = e.target.value)}
          />
          <TextField
            placeholder="password"
            type="password"
            name="password"
            minLength="8"
            required
            // onChange={(data) => {
            //   this.setState({ password: data.target.value || '' });
            // }}
            onChange={(e) => (this.password = e.target.value)}
          />
          <TextField
            placeholder="Phone Number"
            type="text"
            // value={this.state.phonenumber}
            name="phonenumber"
            minLength="7"
            maxLength="16"
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            // onChange={(data) => {
            //   this.setState({ phonenumber: data.target.value || '' });
            // }}
            onChange={(e) => (this.phonenumber = e.target.value)}
          />
          <p>Please select if you would like to setup a busines page:</p>
          <input
            type="checkbox"
            name="restaurantowner"
            // onClick={() => {
            //   this.setState({ restaurantowner: true });
            // }}
            onClick={(e) => (this.restaurantowner = true)}
          />
          <Button type="submit"> Sign Up </Button>
        </form>

        {
          this.state.login === true ? (
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

export default SignUp;
