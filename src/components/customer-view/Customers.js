import React, { Component } from 'react';
import CustomerBio from './CustomerBio';
import CustomerRestaurants from './CustomerRestaurants';
import { Typography } from '@material-ui/core'

export class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.mounted = true;

    fetch('http://localhost:2000/restaurant', {
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
      <div>
        {this.props.login === true ? (
          <div>
            <CustomerBio token={this.props.token} login={this.props.login} />
          </div>
        ) : (
            <div className="notice">
              <Typography>Sign In or Sign Up to create, edit or delete comments!</Typography>
            </div>
          )}

        <CustomerRestaurants
          data={this.state.data}
          token={this.props.token}
          login={this.props.login}
        />
      </div>
    );
  }
}

export default Customers;
