import React, { Component } from 'react';
import CreateRestaurant from './CreateRestaurant';
import ViewRestaurants from './ViewRestaurants';

export class AdminPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Admin Only</h1>
        <CreateRestaurant login={this.props.login} token={this.props.token} />
        <ViewRestaurants login={this.props.login} token={this.props.token} />
      </div>
    );
  }
}

export default AdminPanel;
