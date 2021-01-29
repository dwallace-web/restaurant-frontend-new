import React, { Component } from 'react';
import { Button, TextField, Typography } from '@material-ui/core'

export class CreateComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentmade: false,
    };
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
          this.setState({ commentmade: true });
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    return (
      <div>
        <Typography>Leave a comment</Typography>
        {
          this.state.commentmade === false
            ? <form onSubmit={this.createComment}>
              <TextField
                id="outlined-basic" label="Title of Comment" variant="outlined"
                placeholder="Comment Title"
                type="text"
                name="title"
                required
                onChange={(e) => (this.title = e.target.value)}
              />
              <TextField
                id="outlined-basic" label="Comment Details" variant="outlined"
                placeholder="Comment Details"
                type="text"
                name="body"
                required
                onChange={(e) => (this.body = e.target.value)}
              />
              <Button type="submit"> Submit </Button>
            </form>
            :
            <Typography>
              <p>Comment was made.</p>
            </Typography>
        }

        <br />
      </div>
    );
  }
}

export default CreateComment;
