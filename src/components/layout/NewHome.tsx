import React, { Component } from 'react';
import AdminPanel from '../admin-only/AdminPanel';
import Customers from '../customer-view/Customers';
import { Grid, Typography } from '@material-ui/core';
import API_URL from '../../helpers/environment';

type HomeProps = {

}

type HomeState = {
  login: boolean,
  admin: boolean,
  token: any,
}

class NewHome extends React.Component <HomeProps, HomeState> {

  constructor(props: HomeProps) {
    super(props)
    this.state = {
      login: false,
      admin: false,
      token: null,
    };
  }

  componentDidMount() {
    this.tokenFinder(); //get the token & find out if a user is an admin
  }

  tokenFinder() {
    const token = JSON.parse(localStorage.getItem('token')!);

    // if(!token)

    if (token && token.login && token.admin === true) {
      this.setState({
        login: true,
        admin: true,
        token: JSON.parse(localStorage.getItem('token')!).token,
      });
    } else if (token && token.login === true) {
      this.setState({
        login: true,
        token: JSON.parse(localStorage.getItem('token')!).token,
      });
    } else {
      this.setState({ login: false, admin: false });
    }
  }

  render() {
    return (
      <div>
        {this.state.admin === true ? (
          <AdminPanel login={this.state.login} token={this.state.token} />
        ) : (
            <Customers login={this.state.login} token={this.state.token} />
          )}
      </div>
    );
  }
}

export default NewHome;
