import React, { Component } from 'react';
import CustomerBio from './CustomerBio';
import CustomerRestaurants from './CustomerRestaurants';
import { Typography, Grid, } from '@material-ui/core'
import API_URL from '../../helpers/environment';

export class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.mounted = true;

    fetch(`${API_URL}/restaurant`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      }),
      method: 'GET',
    })
      .then((response) => response.json())
      .then((restaurantdata) => {
        // console.log(restaurantdata);
        if (this.mounted) {
          this.setState({ data: restaurantdata.data });
        }
      })
      .catch((error) => {
        console.log('error--->', error);
      });
    console.log('res fetch finished!');
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <Grid container justify="center" spacing={5}>

        {this.props.login === true ? (
          <Grid item>
            <CustomerBio token={this.props.token} login={this.props.login} />
          </Grid>
        ) : (
            <Grid item>
              <Typography variant="h6">Sign In or Sign Up to create, edit or delete comments!</Typography>
            </Grid>
          )}

        <CustomerRestaurants
          data={this.state.data}
          token={this.props.token}
          login={this.props.login}
        />
      </Grid>
    );
  }
}

export default Customers;
