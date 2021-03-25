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
import TagManager from 'react-gtm-module';


type SUNProps = {

}

type SUNState = {
  email: string,
  password: string,
  username: string, 
  phonenumber: string,
  restaurantowner: boolean,
  login: boolean,
}

class SignUpNew extends React.Component <SUNProps, SUNState> {

  constructor(props: SUNProps) {
    super(props);
    this.state = {
      restaurantowner: false,
      login: false,
      email: '',
      username: '',
      password: '',
      phonenumber: '',
      
    }
  }

  handleEmail = (e: any) => {
    this.setState({email: e.target.value
    })
  }

  handleUsername = (e: any) => {
    this.setState({username: e.target.value
    })
  }

  handlePassword = (e: any) => {
    this.setState({password: e.target.value
    })
  }
  
  handlePhoneNumber = (e: any) => {
    this.setState({phonenumber: e.target.value
    })
  }

  register = (e: any) => {
    e.preventDefault();

    const input = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      phonenumber: this.state.phonenumber,
      restaurantowner: this.state.restaurantowner,
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
          
          TagManager.dataLayer({
            dataLayer: {
              event: 'signUp',
            }
          })

          console.log('done');
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
            name="email"
            required
            onChange={this.handleEmail.bind(this)}
          />
          <TextField
            placeholder="username"
            type="text"
            name="username"
            // minLength="4"
            required
            onChange={this.handleUsername.bind(this)}
          />
          <TextField
            // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            placeholder="password"
            type="password"
            name="password"
            // minlength="8"
            required
            onChange={this.handlePassword.bind(this)}
          />
          <TextField
            placeholder="Phone Number"
            type="text"
            name="phonenumber"
            // minLength="7"
            // maxLength="16"
            onChange={this.handlePhoneNumber.bind(this)}
          />
          <p>Please select if you would like to setup a busines page:</p>
          <input
            type="checkbox"
            name="restaurantowner"
            onClick={(e) => (this.setState({restaurantowner: true}))}
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

export default SignUpNew;
