import React, { Component } from 'react';

export class EditComment extends Component {
  editComment = (e) => {
    e.preventDefault();
    // console.log('works');

    const input = {
      title: this.title,
      body: this.body,
    };

    console.log(
      'test input -->',
      input,
      'fetch url--->',
      `http://localhost:2000/comment/restaurant/${this.props.comment.id}`
    );

    try {
      // const input = this.state;
      fetch(
        `http://localhost:2000/comment/restaurant/${this.props.comment.id}`,
        {
          method: 'PUT',
          headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: this.props.token,
          }),
          body: JSON.stringify(input),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          //make page refresh
          console.log(data);
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    return (
      <div>
        <p>Edit Comment</p>
        <form onSubmit={this.editComment}>
          <input
            placeholder="title"
            type="text"
            name="title"
            required
            onChange={(e) => (this.title = e.target.value)}
          />
          <input
            placeholder="Body"
            type="text"
            name="body"
            required
            onChange={(e) => (this.body = e.target.value)}
          />
          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}

export default EditComment;
