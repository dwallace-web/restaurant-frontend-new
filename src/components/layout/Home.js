import React, { Component } from 'react';
import AdminPanel from '../admin-only/AdminPanel';
import Customers from '../customer-view/Customers';

export class Home extends Component {
  constructor() {
    super();
    // this.state.login = null;
    // this.state.admin = false;

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

    if (token.login && token.admin === true) {
      this.setState({
        login: true,
        admin: true,
        token: JSON.parse(localStorage.getItem('token')).token,
      });
    } else if (token.login) {
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
        <h4>Restaurant App </h4>
        {this.state.admin === true ? (
          <div>
            Welcome back!
            <AdminPanel login={this.state.login} token={this.state.token} />
            <br />
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
