import React, { Component } from 'react';

export class CreateComment extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  createComment = (e) => {
    e.preventDefault();
    console.log('works');

    const input = {
      title: this.title,
      body: this.body,
      restaurantid: this.props.restaurant.id,
    };

    console.log('test input -->', input);

    try {
      // const input = this.state;
      fetch(`http://localhost:2000/comment/`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: this.props.token,
        }),
        body: JSON.stringify(input),
      })
        .then((response) => response.json())
        .then((comment) => {
          console.log('comment---> ', comment);
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    return (
      <div>
        <p>Leave a comment</p>

        <form onSubmit={this.createComment}>
          <input
            placeholder="Comment Title"
            type="text"
            name="title"
            onChange={(e) => (this.title = e.target.value)}
          />
          <input
            placeholder="Comment Details"
            type="text"
            name="body"
            onChange={(e) => (this.body = e.target.value)}
          />
          <button type="submit"> Submit</button>
        </form>
        <br />
      </div>
    );
  }
}

export default CreateComment;