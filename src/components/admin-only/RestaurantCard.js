import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';
import editRestaurant from './editRestaurant';

export class RestaurantCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  editRestaurant = (e) => {
    e.preventDefault();
    // console.log('works');

    const input = {
      name: this.name,
      address: this.address,
      phonenumber: this.phonenumber,
      category: this.category,
    };

    console.log(
      'test input -->',
      input,
      'fetch url--->',
      `http://localhost:2000/restaurant/${this.props.restaurant.id}`
    );

    try {
      // const input = this.state;
      fetch(`http://localhost:2000/restaurant/${this.props.restaurant.id}`, {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: this.props.token,
        }),
        body: JSON.stringify(input),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log('error', error);
    }
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
          <Button onClick={this.toggle}>Edit</Button>{' '}
          <Button onClick={this.props.deleteRestaurant.bind(this, id)}>
            Delete
          </Button>
          <Collapse isOpen={this.state.isOpen}>
            Hello World
            {/* <editRestaurant />
            Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node
            */}
            <form onSubmit={this.editRestaurant}>
              <input
                placeholder="Name"
                type="text"
                name="name"
                required
                onChange={(e) => (this.name = e.target.value)}
              />
              <input
                placeholder="Address"
                type="text"
                name="address"
                required
                onChange={(e) => (this.address = e.target.value)}
              />
              <input
                placeholder="phone number"
                type="text"
                name="phonenumber"
                onChange={(e) => (this.phonenumber = e.target.value)}
              />
              <input
                placeholder="category"
                type="text"
                name="category"
                required
                onChange={(e) => (this.category = e.target.value)}
              />
              <button type="submit"> Submit</button>
            </form>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default RestaurantCard;
