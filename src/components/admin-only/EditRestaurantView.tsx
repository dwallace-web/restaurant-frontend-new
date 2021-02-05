import React, { Component } from 'react';
import API_URL from '../../helpers/environment';
import { Typography, Button, TextField, Card, CardContent } from '@material-ui/core'

type EditResProps = {
  restaurant: {
    id: number,
    name: string,
    phonenumber: string,
    address: string,
    category: string,
  },
  token: string,
  deleteRestaurant: any,
}

type EditResState = {
  name: string,
  address: string,
  phonenumber: string,
  category: string
}

class EditRestaurantView extends React.Component <EditResProps, EditResState> {

  constructor(props: EditResProps) {
    super(props);
      this.state = {
        name: '',
        address: '',
        phonenumber: '',
        category: ''
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

  editRestaurant = (e: any) => {
    e.preventDefault();
    // console.log('works');

    const input = {
      name: this.state.name,
      address: this.state.address,
      phonenumber: this.state.phonenumber,
      category: this.state.category,
    };

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
        <Typography>Edit this restaurant</Typography>
        <form onSubmit={this.editRestaurant}>
          <TextField
            placeholder={name}
            type="text"
            name="name"
            required
            onChange={this.setName.bind(this)}
          />
          <TextField
            placeholder={address}
            type="text"
            name="address"
            required
            onChange={this.setAddress.bind(this)}
          />
          <TextField
            placeholder={phonenumber}
            type="text"
            name="phonenumber"
            onChange={this.setPhonenumber.bind(this)}
          />
          <TextField
            placeholder={category}
            type="text"
            name="category"
            required
            onChange={this.setCategory.bind(this)}
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

export default EditRestaurantView;
