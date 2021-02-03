import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard';

type RestaurantDisplayProps = {
  login: boolean,
  token: string,
  data: any,
  deleteRestaurant: any
}

type RestaurantDisplayState = {
  
}


class RestaurantDisplay extends React.Component <RestaurantDisplayProps, RestaurantDisplayState> {

  constructor(props: RestaurantDisplayProps) {
    super(props);

  }

  render() {
    // console.log(this.props.data);

    return this.props.data.map((restaurant: any) => (
      <RestaurantCard
        token={this.props.token}
        key={restaurant.id}
        restaurant={restaurant}
        login={this.props.login}
        deleteRestaurant={this.props.deleteRestaurant}
      />
    ));
  }
}

export default RestaurantDisplay;
