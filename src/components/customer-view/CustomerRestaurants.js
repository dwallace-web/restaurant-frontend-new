import React, { Component } from 'react';
import CustomerCard from './CustomerCard';
import { Grid, Typography } from '@material-ui/core';


export class CustomerRestaurants extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('customers only', this.props.data);

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >

        <Typography variant="h4">Some fine restaurants</Typography>

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
