import React, { Component } from 'react';
import EditComment from './EditComment';

export class CustomerBioComment extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { title, body, id } = this.props.comment;

    return (
      <div>
        <div className="single-comment">
          <h6>{title}</h6>
          <p>{body}</p>
          <EditComment token={this.props.token} comment={this.props.comment} />
          <button onClick={this.props.deleteComment.bind(this, id)}>
            Delete Comment{' '}
          </button>
        </div>
      </div>
    )
  }
}

export default CustomerBioComment;
