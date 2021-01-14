import React, { Component } from 'react';

export class SignUp extends Component {
  // constructor(bro: string) {
  //   super(bro);
  //   this.state = {
  //     email: null,
  //     username: null,
  //     password: null,
  //     restaurantowner: true,
  //     phonenumber: null,
  //     login: false,
  //     store: null,
  //   };
  // }

  // signup() {
  //   const data = JSON.stringify(this.state);

  //   fetch('http://localhost:2000/user/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: data,
  //     // redirect: 'follow',
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log('success:', result);
  //     })
  //     .catch((error) => console.log('error', error));
  // }

  componentDidMount() {
    fetch('http://localhost:2000/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log('error', error));
  }

  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: any) {
    event.preventDefault();
    fetch('/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        username: this.username.value,
        password: this.password.value,
      },
    });
  }

  render() {
    return (
      <div id="signup">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={(email) => {
              this.email = email;
            }}
            placeholder="email"
            type="text"
            name="email"
          />
          <br />
          <input
            onChange={(password) => {
              this.password = password;
            }}
            placeholder="password"
            type="password"
            name="password"
          />
          <br />
          <button type="submit">Start</button>
        </form>
        ​
      </div>
    );
  }
}

export default SignUp;
