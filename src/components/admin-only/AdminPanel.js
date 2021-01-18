import React, { Component } from 'react';
import CreateRestaurant from './CreateRestaurant';
import ViewRestaurants from './ViewRestaurants';

export class AdminPanel extends Component {
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
  render() {
    return (
      <div>
        <h1>Admin Only</h1>
        <ViewRestaurants />
        <CreateRestaurant />
      </div>
    );
  }
}

export default AdminPanel;
