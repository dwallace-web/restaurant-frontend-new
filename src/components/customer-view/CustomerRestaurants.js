import React, { Component } from 'react';
import CustomerCard from './CustomerCard';
import { Grid } from '@material-ui/core';

export class CustomerRestaurants extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('customers only', this.props.data);

    return (
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
      >

        <h1>View Restaurants</h1>

        {
          this.props.data.map((restaurant) => (
            <CustomerCard
              key={restaurant.id}
              restaurant={restaurant}
              token={this.props.token}
              login={this.props.login}
            />
          ))
        }

      </Grid>
    )
  }
}

export default CustomerRestaurants;
