import React, { Component } from 'react';

export class SignIn extends Component {
  //this will be a class component

  constructor() {
    super();
  }

  signIn = (e) => {
    e.preventDefault();

    const input = {
      email: this.email,
      password: this.password,
    };

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
        if (data.login === true) {
          localStorage.setItem(
            'token',
            JSON.stringify({
              login: true,
              token: data.sessionToken,
              admin: data.user.restaurantowner,
            })
          );
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
            // value={this.state.email}
            name="email"
            // onChange={(data) => {
            //   this.setState({ email: data.target.value });
            // }}
            onChange={(e) => (this.email = e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            // onChange={(data) => {
            //   this.setState({ password: data.target.value || '' });
            // }}
            onChange={(e) => (this.password = e.target.value)}
          />
          <button type="submit"> Submit</button>
        </form>
        <div className="error"></div>
      </div>
    );
  }
}

export default SignIn;
