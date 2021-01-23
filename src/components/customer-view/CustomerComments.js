import React, { Component } from 'react';

export class CustomerComments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.comment.map((comment) => (
      <div key={comment.id} className="single-comment">
        <h6>{comment.title}</h6>
        <p>{comment.body}</p>
      </div>
    ));
  }
}

export default CustomerComments;
