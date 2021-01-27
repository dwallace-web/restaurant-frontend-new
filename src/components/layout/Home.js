import React, { Component } from 'react';
import AdminPanel from '../admin-only/AdminPanel';
import Customers from '../customer-view/Customers';

export class Home extends Component {

  constructor(props) {
    super(props);

  }

  
  
  render() {
    return (
      <div>
        <h4>Restaurant App </h4>
        {this.props.admin === true ? (
          <div>
            Welcome back!
            <AdminPanel login={this.props.login} token={this.props.token} />
            <br />
          </div>
        ) : (
          <div>
            <Customers login={this.props.login} token={this.props.token} />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
