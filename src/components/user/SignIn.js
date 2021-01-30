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
        <h1>Sign In with React!</h1>
        <form onSubmit={this.signIn}>
          <input
            placeholder="email"
            type="text"
            name="email"
            onChange={(e) => (this.email = e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            onChange={(e) => (this.password = e.target.value)}
          />
          <button type="submit"> Submit</button>
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
