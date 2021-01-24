import React, { Component } from 'react';
import EditComment from './EditComment';

export class CustomerBioComment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // return <div></div>;
    return this.props.comment.map((comment) => (
      <div key={comment.id} className="single-comment">
        <h6>{comment.title}</h6>
        <p>{comment.body}</p>
        <EditComment token={this.props.token} comment={comment} />
        <button onClick={this.props.deleteComment.bind(this, comment.id)}>
          Delete Comment{' '}
        </button>
      </div>
    ));
  }
}

export default CustomerBioComment;
