import React, { Component } from 'react';
import { Typography, Button, TextField } from '@material-ui/core'

export class EditComment extends Component {


  constructor(props) {
    super(props);

    this.state = {
      commentedit: false,
    };
  }

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

          this.setState({ commentedit: true });
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    return (
      <div>
        <Typography>Edit Comment</Typography>
        {
          this.state.commentedit === false
            ?
            <div>
              <form onSubmit={this.editComment}>
                <TextField
                  placeholder="title"
                  type="text"
                  name="title"
                  required
                  onChange={(e) => (this.title = e.target.value)}
                />
                <TextField
                  placeholder="Body"
                  type="text"
                  name="body"
                  required
                  onChange={(e) => (this.body = e.target.value)}
                />
                <Button type="submit"> Submit</Button>
              </form>
            </div>
            :
            <div>
              <Typography>Comment was edited!</Typography>
            </div>
        }

      </div>
    );
  }
}

export default EditComment;
