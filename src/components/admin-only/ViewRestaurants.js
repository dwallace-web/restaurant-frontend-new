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
        key={restaurant.id}
        restaurant={restaurant}
        deleteRestaurant={this.deleteRestaurant}
      />
    ));
    return (
      <div>
        <h2>My Restaurants</h2>
        <div className="restaurantview"> </div>
        <RestaurantCard
          data={this.props.data}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      </div>
    );
  }
}

export default ViewRestaurants;
