import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export class RestaurantCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({ isOpen: true });
  };

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
          <Button>Edit</Button>{' '}
          <Button onClick={this.props.deleteRestaurant.bind(this, id)}>
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default RestaurantCard;
