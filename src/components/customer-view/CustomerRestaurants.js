import React, { Component } from 'react';
import CustomerCard from './CustomerCard';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export class CustomerRestaurants extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    // console.log('customers only', this.props.data);

    return (
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
      // alignItems="flex-end"
      >

        <Typography variant="h4" align="center">Some fine restaurants</Typography>

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
