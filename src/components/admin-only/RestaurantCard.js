import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class RestaurantCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('card', this.props.restaurant);

    const {
      id,
      name,
      address,
      phonenumber,
      category,
      socialmedia,
    } = this.props.restaurant;

    return (
      <div className="restaurantcard">
        <h5 className="restaurantname">Name: {name}</h5>
        <p className="`restaurantaddress`">Address: {address}</p>
        <p className="restaurantphone">Phone Number: {phonenumber}</p>
        <p className="restaurantcat">Category: {category}</p>
        <div className="restaurantbuttons">
          <Button>Edit</Button> <Button>Delete</Button>
        </div>
      </div>
    );
  }
}

export default RestaurantCard;
