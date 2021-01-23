import React, { Component } from 'react';
import CustomerRestaurants from './CustomerRestaurants';

export class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // this.tokenFinder(); //get the token & find out if a user is an admin
    // this.getUserRestaurants();
    // console.log('fetch started');
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
        this.setState({ data: restaurantdata.data });
      })
      .catch((error) => {
        console.log('error--->', error);
      });
    console.log('res fetch finished!');
  }

  render() {
    return (
      <div>
        {this.props.login === true ? (
          <br />
        ) : (
          <div className="notice">
            <p>Sign In or Sign Up to create, edit or delete comments!</p>
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
