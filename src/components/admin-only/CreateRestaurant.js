import React, { Component } from 'react';
import API_URL from '../../helpers/environment';
import { Typography, Button, TextField, Card, CardContent } from '@material-ui/core'

export class CreateRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdPlace: false,
    }
  }

  createRestaurant = (e) => {
    e.preventDefault();
    console.log('works');

    const input = {
      name: this.name,
      address: this.address,
      phonenumber: this.phonenumber,
      category: this.category,
    };

    console.log('test input -->', input);

    try {
      // const input = this.state;
      fetch(`${API_URL}/restaurant/`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: this.props.token,
        }),
        body: JSON.stringify(input),
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({ createdPlace: true });
          console.log(data);
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    return (
      <div>
        <Typography>Create Restaurant </Typography>
        <form onSubmit={this.createRestaurant}>
          <TextField
            placeholder="Name"
            type="text"
            name="name"
            onChange={(e) => (this.name = e.target.value)}
          />
          <TextField
            placeholder="Address"
            type="text"
            name="address"
            onChange={(e) => (this.address = e.target.value)}
          />
          <TextField
            placeholder="phone number"
            type="tel"
            name="phonenumber"
            onChange={(e) => (this.phonenumber = e.target.value)}
          />
          <TextField
            placeholder="category"
            type="text"
            name="category"
            onChange={(e) => (this.category = e.target.value)}
          />
          <Button type="submit">Add Restaurant</Button>
        </form>
      </div>
    );
  }
}

export default CreateRestaurant;
