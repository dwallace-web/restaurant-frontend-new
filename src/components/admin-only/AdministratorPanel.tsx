import React, { Component } from 'react';
import API_URL from '../../helpers/environment';
import { Typography, } from '@material-ui/core'
import RestaurantDisplay from './RestaurantDisplay';
import CreateNewRestaurant from './CreateNewRestaurant';
import CustomerBiography from '../customer-view/CustomerBiography';

type AdminProps = {
  login: boolean,
  token: string
}

type AdminState = {
  data: object,

}

class AdministratorPanel extends React.Component <AdminProps, AdminState> {
  constructor(props: AdminProps) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    // this.tokenFinder(); //get the token & find out if a user is an admin
    // this.getUserRestaurants();
    // console.log('fetch started');
    fetch(`${API_URL}/restaurant/user`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      }),
      method: 'GET',
    })
      .then((response) => response.json())
      .then((restaurantdata) => {
        // console.log(restaurantdata);
        this.setState({ data: restaurantdata });
      })
      .catch((error) => {
        console.log('error--->', error);
      });
    console.log('fetch finished!');
  }

  deleteRestaurant = (id: any) => {
    // e.preventDefault();
    console.log('works', id);
    try {
      fetch(`${API_URL}/restaurant/${id}`, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: this.props.token,
        }),
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
    return (
      <div style={{ marginBottom: 10 }} >
        <Typography>Restaurant Administration Panel </Typography>
        <CreateNewRestaurant 
        login={this.props.login} token={this.props.token}
        />
        <br />
        <Typography>Your Restaurants</Typography>

        <RestaurantDisplay
          login={this.props.login}
          token={this.props.token}
          data={this.state.data}
          deleteRestaurant={this.deleteRestaurant}
        />
        <CustomerBiography 
          login={this.props.login} token={this.props.token} 
        />
      </div>
    );
  }
}

export default AdministratorPanel;
