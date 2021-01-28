import React, { Component } from 'react';
// import CustomerBioComment from './CustomerBioComment';
import CustomerBioPanel from './CustomerBioPanel';

export class CustomerBio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:2000/comment/user', {
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
      fetch(`http://localhost:2000/comment/restaurant/${id}`, {
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
        <h1>My Comments: </h1>

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
