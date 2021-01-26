import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Checkbox } from 'materialize-css';

export class SignUp extends Component {
  //this will be a class component

  constructor() {
    super();
    this.restaurantowner = false;
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
        if (data.login === true) {
          localStorage.setItem(
            'token',
            JSON.stringify({
              login: true,
              token: data.sessionToken,
              admin: data.user.restaurantowner,
            })
          );
          <Redirect to="/" />
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
        <h1>Register in react class components</h1>
        <form onSubmit={this.register}>
          <input
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
          <input
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
          <input
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
          <input
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
          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
