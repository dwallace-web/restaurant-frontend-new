import React, { Component } from 'react';

export class CreateRestaurant extends Component {
  constructor() {
    super();
    this.token = 'null';
  }

  componentDidMount() {
    this.tokenFinder(); //get the token & find out if a user is an admin
  }

  tokenFinder() {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token && token.login && token.admin === true) {
      this.setState({
        login: true,
        admin: true,
        token: JSON.parse(localStorage.getItem('token')).token,
      });
    } else if (token && token.login) {
      this.setState({ login: true });
    } else {
      this.setState({ login: false, admin: false });
    }
  }

  createRestaurant = (e) => {
    e.preventDefault();
    console.log('works');

    const input = {
      name: this.name,
      address: this.address,
      phonenumber: this.phonenumber,
      category: this.category,
    };

    console.log('test input -->', input);

    try {
      // const input = this.state;
      fetch('http://localhost:2000/restaurant/', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDgsImlhdCI6MTYxMDkxNzkzNSwiZXhwIjoxNjEwOTYxMTM1fQ.HWrp5VeWjvRPkY-VbnOssxLouoEhH6VFMY-8hxq3CFM',
        }),
        body: JSON.stringify(input),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    return (
      <div>
        Create Restaurant Form Goes Here
        <h4>Create Restaurant </h4>
        <form onSubmit={this.createRestaurant}>
          <input
            placeholder="Name"
            type="text"
            name="name"
            onChange={(e) => (this.name = e.target.value)}
          />
          <input
            placeholder="Address"
            type="text"
            name="address"
            onChange={(e) => (this.address = e.target.value)}
          />
          <input
            placeholder="phone number"
            type="text"
            name="phonenumber"
            onChange={(e) => (this.phonenumber = e.target.value)}
          />
          <input
            placeholder="category"
            type="text"
            name="category"
            onChange={(e) => (this.category = e.target.value)}
          />
          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateRestaurant;
