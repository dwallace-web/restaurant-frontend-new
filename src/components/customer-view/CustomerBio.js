import React, { Component } from 'react';
import CustomerBioPanel from './CustomerBioPanel';
import { Typography } from '@material-ui/core'
import API_URL from '../../helpers/environment';

export class CustomerBio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: [],
      deletedcomment: false,
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/comment/user`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      }),
      method: 'GET',
    })
      .then((response) => response.json())
      .then((usercomment) => {
        console.log(usercomment);
        this.setState({ comment: usercomment.data });
      })
      .catch((error) => {
        console.log('error--->', error);
      });
    console.log('res fetch finished!');
  }

  deleteComment = (id) => {
    // e.preventDefault();
    console.log('works', id);
    try {
      fetch(`${API_URL}/comment/restaurant/${id}`, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: this.props.token,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({ deletedcomment: true });
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    return (
      <div>
        <Typography variant="h4" align="center">My comments</Typography>

        <CustomerBioPanel
          comment={this.state.comment}
          deleteComment={this.deleteComment}
          token={this.props.token}
        />
      </div>
    );
  }
}

export default CustomerBio;
