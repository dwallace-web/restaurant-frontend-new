import React, { Component } from 'react';
import { Typography, Grid, } from '@material-ui/core'
import API_URL from '../../helpers/environment';
import CustomerBiography from './CustomerBiography';
import CustomerRestaurantsNew from './CustomerRestaurantsNew';

type CNProps = {
  token: string,
  login: boolean
}

type CNState = {
  data: any,
  mounted: boolean,
}

class CustomersNew extends  React.Component <CNProps, CNState> {
  constructor(props: CNProps) {
    super(props);

    this.state = {
      data: [],
      mounted: true,
    };
  }

  componentDidMount() {

    fetch(`${API_URL}/restaurant`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((restaurantdata) => {
        // console.log(restaurantdata);
        if (this.state.mounted) {
          this.setState({ data: restaurantdata.data });
        }
      })
      .catch((error) => {
        console.log('error--->', error);
      });
    console.log('res fetch finished!');
  }

  componentWillUnmount() {
    this.setState({mounted: false})
  }

  render() {
    return (
      <Grid container justify="center" spacing={5} >

        {this.props.login === true
          ?

          (
            <Grid container justify="center" spacing={5}>
              <Grid item>
                {/* <CustomerBio token={this.props.token} login={this.props.login} /> */}
                <CustomerBiography token={this.props.token} login={this.props.login}  />
              </Grid>
              <Grid item>
              <CustomerRestaurantsNew
                  data={this.state.data}
                  token={this.props.token}
                  login={this.props.login}
                />
              </Grid>
            </Grid>
          )
          :
          (
            <Grid container direction="column" alignItems="center" spacing={5} style={{ margin: 20 }}>
              <Grid item>
                <Typography variant="h6">Sign In or Sign Up to create, edit or delete comments!</Typography>
              </Grid>
              <Grid item>
                {/* <CustomerRestaurants
                  data={this.state.data}
                  token={this.props.token}
                  login={this.props.login}
                /> */}

                <CustomerRestaurantsNew
                  data={this.state.data}
                  token={this.props.token}
                  login={this.props.login}
                />
              </Grid>
            </Grid>
          )
        }

        {/* <CustomerRestaurants
          data={this.state.data}
          token={this.props.token}
          login={this.props.login}
        /> */}
      </Grid>
    );
  }
}

export default CustomersNew;
