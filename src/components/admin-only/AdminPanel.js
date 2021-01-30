import React, { Component } from 'react';
import CustomerBio from '../customer-view/CustomerBio';
import CreateRestaurant from './CreateRestaurant';
import ViewRestaurants from './ViewRestaurants';
import API_URL from '../../helpers/environment';


export class AdminPanel extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: [],
  };

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

  deleteRestaurant = (id) => {
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
      <div>
        <h1>Admin Only</h1>
        <CreateRestaurant login={this.props.login} token={this.props.token} />
        <br />
        <ViewRestaurants
          login={this.props.login}
          token={this.props.token}
          data={this.state.data}
          deleteRestaurant={this.deleteRestaurant}
        />
        <CustomerBio login={this.props.login} token={this.props.token} />
      </div>
    );
  }
}

export default AdminPanel;
