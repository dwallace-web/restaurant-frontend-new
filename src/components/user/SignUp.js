import React, { Component } from 'react';

export class SignUp extends Component {
  //this will be a class component

  constructor() {
    super();
    this.restaurantowner = false;
  }

  componentDidMount() {
    this.tokenFinder(); //get the token & find out if a user is an admin
  }
  tokenFinder() {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token && token.login && token.admin === true) {
      this.setState({ login: true, admin: true });
    } else if (token && token.login) {
      this.setState({ login: true });
    }
  }

  register = (e) => {
    e.preventDefault();
    console.log('works');

    const input = {
      email: this.email,
      password: this.password,
      username: this.username,
      phonenumber: this.phonenumber,
      restaurantowner: this.restaurantowner,
    };

    try {
      // const input = this.state;
      fetch('http://localhost:2000/user/signup', {
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
              admin: data.user.restaurantowner,
            })
          );
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    return (
      <div>
        <h1>Register in react class components</h1>
        <form onSubmit={this.register}>
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
            placeholder="username"
            type="text"
            // value={this.state.username}
            name="username"
            // onChange={(data) => {
            //   this.setState({ username: data.target.value || '' });
            // }}
            onChange={(e) => (this.username = e.target.value)}
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
          <input
            placeholder="Phone Number"
            type="number"
            // value={this.state.phonenumber}
            name="phonenumber"
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
          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
