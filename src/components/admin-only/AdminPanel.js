import React, { Component } from 'react';
import CreateRestaurant from '../restaurants/CreateRestaurant';

export class AdminPanel extends Component {
  componentDidMount() {
    this.getUserRestaurants();
  }

  getUserRestaurants = () => {
    console.log('getting started');

    console.log('getting finished!');
  };

  render() {
    return (
      <div>
        <h1>Admin Only</h1>
        <h2>Manage Restaurants</h2>
        <h3>Create Restaurant Form</h3>
        <CreateRestaurant />
      </div>
    );
  }
}

export default AdminPanel;
