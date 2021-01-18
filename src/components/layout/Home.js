import React, { Component } from 'react';
import AdminPanel from '../admin-only/AdminPanel';

export class Home extends Component {
  constructor() {
    super();
    // this.state.login = null;
    // this.state.admin = false;

    this.state = {
      login: false,
      admin: false,
    };
  }

  componentDidMount() {
    this.tokenFinder(); //get the token & find out if a user is an admin
  }

  tokenFinder() {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token && token.login && token.admin === true) {
      this.setState({
        login: true,
        admin: true,
        token: JSON.parse(localStorage.getItem('token')).token,
      });
    } else if (token && token.login) {
      this.setState({ login: true });
    } else {
      this.setState({ login: false, admin: false });
    }
  }

  render() {
    return (
      <div>
        <h4>User Content</h4>
        {this.state.login === true && this.state.admin === true ? (
          <div>
            Welcome back!
            <AdminPanel />
          </div>
        ) : (
          <div>Sign Up or Login to view </div>
        )}
      </div>
    );
  }
}

export default Home;
