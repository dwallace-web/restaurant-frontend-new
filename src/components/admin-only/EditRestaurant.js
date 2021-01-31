import React, { Component } from 'react';
import API_URL from '../../helpers/environment';
import { Typography, Button, TextField, Card, CardContent } from '@material-ui/core'

export class EditRestaurant extends Component {
  constructor(props) {
    super(props);
  }

  editRestaurant = (e) => {
    e.preventDefault();
    // console.log('works');

    const input = {
      name: this.name,
      address: this.address,
      phonenumber: this.phonenumber,
      category: this.category,
    };

    // console.log(
    //   'test input -->',
    //   input,
    //   'fetch url--->',
    //   `http://localhost:2000/restaurant/${this.props.restaurant.id}`
    // );

    try {
      // const input = this.state;
      fetch(`${API_URL}/restaurant/${this.props.restaurant.id}`, {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: this.props.token,
        }),
        body: JSON.stringify(input),
      })
        .then((response) => response.json())
        .then((data) => {
          //make page refresh
          console.log(data);
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {

    const { id, name, address, phonenumber, category } = this.props.restaurant;

    return (
      <div>
        {/* <editRestaurant />
            Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node
            */}
        <Typography>Edit this restaurant</Typography>
        <form onSubmit={this.editRestaurant}>
          <TextField
            placeholder="Name"
            type="text"
            name="name"
            required
            onChange={(e) => (this.name = e.target.value)}
          />
          <TextField
            placeholder="Address"
            type="text"
            name="address"
            required
            onChange={(e) => (this.address = e.target.value)}
          />
          <TextField
            placeholder="phone number"
            type="text"
            name="phonenumber"
            onChange={(e) => (this.phonenumber = e.target.value)}
          />
          <TextField
            placeholder="category"
            type="text"
            name="category"
            required
            onChange={(e) => (this.category = e.target.value)}
          />
          <Button type="submit">Edit Restaurant </Button>
        </form>
        <Button onClick={this.props.deleteRestaurant.bind(this, id)}>
          Delete Restaurant
        </Button>
      </div>
    );
  }
}

export default EditRestaurant;
