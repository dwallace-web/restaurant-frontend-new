import React, { Component } from 'react';
import API_URL from '../../helpers/environment';
import { Typography, Button, TextField, Card, CardContent } from '@material-ui/core'

type NewResProps = {
  login: boolean,
  token: string,

}
//these are types for the state variable

type NewResState = {
  createdPlace: boolean,
  name: string,
  address: string,
  phonenumber: string,
  category: string,
}

class CreateNewRestaurant extends React.Component <NewResProps, NewResState> {
  constructor(props: NewResProps) {
    super(props);
    this.state = {
      createdPlace: false,
      name: '',
      address: '',
      phonenumber: '',
      category: '',
    }
  }


  setName = (e: any) => {
    this.setState({name: e.target.value})
  }

  setAddress = (e: any) => {
    this.setState({address: e.target.value})
  }
  
  setPhonenumber = (e: any) => {
    this.setState({phonenumber: e.target.value})
  }
  setCategory = (e: any) => {
    this.setState({category: e.target.value})
  }

  createRestaurant = (e: any) => {
    e.preventDefault();
    console.log('works');

    const input = {
      name: this.state.name,
      address: this.state.address,
      phonenumber: this.state.phonenumber,
      category: this.state.category,
    };

    console.log('test input -->', input);

    try {
      // const input = this.state;
      fetch(`${API_URL}/restaurant/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.props.token,
        },
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
      <div style={{ marginBottom: 10 }} >
        <Typography>Create Restaurant </Typography>
        <form onSubmit={this.createRestaurant}>
          <TextField
            placeholder="Name"
            type="text"
            name="name"
            onChange={this.setName.bind(this)}
          />
          <TextField
            placeholder="Address"
            type="text"
            name="address"
            onChange={this.setAddress.bind(this)}
          />
          <TextField
            placeholder="phone number"
            type="tel"
            name="phonenumber"
            onChange={this.setPhonenumber.bind(this)}
          />
          <TextField
            placeholder="category"
            type="text"
            name="category"
            onChange={this.setCategory.bind(this)}
          />
          <Button type="submit">Add Restaurant</Button>
        </form>
      </div>
    );
  }
}

export default CreateNewRestaurant;
