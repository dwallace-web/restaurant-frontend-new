import React, { Component } from 'react';
import CustomerCard from './CustomerCard';

export class CustomerRestaurants extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('customers only', this.props.data);

    return this.props.data.map((restaurant) => (
      <CustomerCard
        key={restaurant.id}
        restaurant={restaurant}
        token={this.props.token}
        login={this.props.login}
      />
    ));
  }
}

export default CustomerRestaurants;
