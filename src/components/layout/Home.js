import React, { Component } from 'react';
import AdminPanel from '../admin-only/AdminPanel';
import Customers from '../customer-view/Customers';
import { Grid, Typography } from '@material-ui/core';
import API_URL from '../../helpers/environment';

export class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      login: false,
      admin: false,
      token: JSON.parse(localStorage.getItem('token'))?.token || '',
    };
  }

  componentDidMount() {
    this.tokenFinder(); //get the token & find out if a user is an admin
  }

  tokenFinder() {
    const token = JSON.parse(localStorage.getItem('token'));

    // if(!token)

    if (token && token.login && token.admin === true) {
      this.setState({
        login: true,
        admin: true,
        token: JSON.parse(localStorage.getItem('token')).token,
      });
    } else if (token && token.login === true) {
      this.setState({
        login: true,
        token: JSON.parse(localStorage.getItem('token')).token,
      });
    } else {
      this.setState({ login: false, admin: false });
    }
  }

  render() {
    return (

      <div>
        {this.state.admin === true ? (
          <div>
            <AdminPanel login={this.state.login} token={this.state.token} />
          </div>
        ) : (
            <div>
              <Customers login={this.state.login} token={this.state.token} />
            </div>
          )}
      </div>
    );
  }
}

export default Home;
