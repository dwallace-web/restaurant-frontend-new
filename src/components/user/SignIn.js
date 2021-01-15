import React, { Component } from 'react';

export class SignIn extends Component {
  //this will be a class component

  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
    };
  }

  async SignIn() {
    try {
      const input = this.state;
      fetch('http://localhost:2000/user/signin', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(input),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem(
            'token',
            JSON.stringify({
              login: true,
              token: data.sessionToken,
            })
          );
        });
    } catch (error) {
      console.log('error', error);
    }
  }

  render() {
    return (
      <div>
        <h1>Sign In with React!</h1>
        <div>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={(data) => {
              this.setState({ email: data.target.value });
            }}
            placeholder="Email"
          />
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={(data) => {
              this.setState({ password: data.target.value });
            }}
            placeholder="Password"
          />
          <button
            onClick={() => {
              this.SignIn();
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;
