import React, { Component } from 'react';
import CustomerCard from './CustomerCard';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomerCardNew from './CustomerCardNew';

type CRNProps = {
  data:any,
  token: string,
  login: boolean
}

type CRNState = {

}

class CustomerRestaurantsNew extends React.Component <CRNProps, CRNState> {
  constructor(props:CRNProps) {
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
          this.props.data.map((restaurant: any) => (
            // <CustomerCard
            //   key={restaurant.id}
            //   restaurant={restaurant}
            //   token={this.props.token}
            //   login={this.props.login}
            // />

            <CustomerCardNew 
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

export default CustomerRestaurantsNew;
