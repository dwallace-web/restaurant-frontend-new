import React, { Component } from 'react';

export class RestaurantCard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(props) {}

  render() {
    return (
      <div>
        {/* {this.props.restaurantdata} */}
        {/* <div id="locations">Your Locations:</div> */}
        {this.props.restaurantdata.map((restaurant, index) => {
          console.log(index, restaurant);
        })}
      </div>
    );
  }
}

export default RestaurantCard;
