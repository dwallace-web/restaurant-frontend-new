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
import TagManager from 'react-gtm-module';


type USIProps = {

}

type USIState = {
  active: boolean,
  email: string,
  password: string,
}

class UserSignIn extends React.Component <USIProps, USIState> {
  //this will be a class component

    constructor(props: USIProps) {
    super(props);
    this.state = {
      active: false,
      email: '',
      password: '',
    }
  }

  handleEmail = (e: any) => {
    this.setState({email: e.target.value
    })
  }

  handlePassword = (e: any) => {
    this.setState({password: e.target.value
    })
  }

  signIn = (e: any) => {
    e.preventDefault();

    const input = {
      email: this.state.email,
      password: this.state.password,
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
          TagManager.dataLayer({
            dataLayer: {
              event: 'signIn',
            }
          })
        } else {
          TagManager.dataLayer({
            dataLayer: {
              event: 'failed',
            }
          })
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
            onChange={this.handleEmail.bind(this)}
                      />
          <TextField
            placeholder="password"
            type="password"
            name="password"
            onChange={this.handlePassword.bind(this)}
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

export default UserSignIn;
