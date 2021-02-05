import React, { Component } from 'react';
import { Button, TextField, Typography } from '@material-ui/core'
import API_URL from '../../helpers/environment';

type NewCommentProps = {
  token: string,
  restaurant: any
}

type NewCommentState = {
  title: string,
  body: string,
  commentmade: boolean
}


class CreateNewComment extends React.Component <NewCommentProps, NewCommentState> {
  constructor(props: NewCommentProps) {
    super(props);
    this.state = {
      commentmade: false,
      title: '',
      body: '',
    }
  }

  setTitle = (e: any) => {
    this.setState({title: e.target.value})
  }

  setBody = (e: any) => {
    this.setState({body: e.target.value})
  } 


  createComment = (e: any) => {
    e.preventDefault();
    console.log('works');

    const input = {
      title: this.state.title,
      body: this.state.body,
      restaurantid: this.props.restaurant.id,
    };

    console.log('test input -->', input);

    try {
      // const input = this.state;
      fetch(`${API_URL}/comment/`, {
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
                onChange={this.setTitle.bind(this)}
              />
              <TextField
                id="outlined-basic" label="Comment Details" variant="outlined"
                placeholder="Comment Details"
                type="text"
                name="body"
                required
                onChange={this.setBody.bind(this)}
              />
              <Button type="submit"> Submit </Button>
            </form>
            :
            <Typography>
              Comment was made.
            </Typography>
        }
        <br />
      </div>
    );
  }
}

export default CreateNewComment;
