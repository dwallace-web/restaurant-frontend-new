import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard';

export class ViewRestaurants extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data);

    return this.props.data.map((restaurant) => (
      <RestaurantCard
        token={this.props.token}
        key={restaurant.id}
        restaurant={restaurant}
        deleteRestaurant={this.props.deleteRestaurant}
      />
    ));
  }
}

export default ViewRestaurants;
