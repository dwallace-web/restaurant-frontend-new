import React, { Component } from 'react';
import CustomerCard from './CustomerCard';

export class CustomerRestaurants extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('customers only', this.props.data);

    return (

      <div>
        <h1>View Restaurants</h1>
        {this.props.data.map((restaurant) => (
          <CustomerCard
            key={restaurant.id}
            restaurant={restaurant}
            token={this.props.token}
            login={this.props.login}
          />
        ))}
      </div>
    )
  }
}

export default CustomerRestaurants;
