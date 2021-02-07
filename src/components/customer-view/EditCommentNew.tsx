import React, { Component } from 'react';
import { Typography, Button, TextField } from '@material-ui/core'
import API_URL from '../../helpers/environment';

type ECNProps = {
  comment: any,
  token: string,
}

type ECNState = {
  title: string,
  body: string,
  commentedit: boolean,
}

class EditCommentNew extends React.Component <ECNProps, ECNState> {


  constructor(props: ECNProps) {
    super(props)

    this.state = {
      commentedit: false,
      title: '',
      body: ''
    };
  }


  setTitle = (e: any) => {
    this.setState({title: e.target.value})
  }

  setBody = (e: any) => {
    this.setState({body: e.target.value})
  }

  editComment = (e: any) => {
    e.preventDefault();
    // console.log('works');

    const input = {
      title: this.state.title,
      body: this.state.body,
    };

    // console.log(
    //   'test input -->',
    //   input,
    //   'fetch url--->',
    //   `http://localhost:2000/comment/restaurant/${this.props.comment.id}`
    // );

    try {
      // const input = this.state;
      fetch(
        `${API_URL}/comment/restaurant/${this.props.comment.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: this.props.token,
          },
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
      <div style={{ marginTop: 16 }}>
        <Typography>Edit Comment</Typography>
        {
          this.state.commentedit === false
            ?
            <div>
              <form onSubmit={this.editComment} style={{ marginBottom: 10 }}>
                <TextField
                  placeholder={this.props.comment.title}
                  type="text"
                  name="title"
                  required
                  onChange={this.setTitle.bind(this)}
                />

                <TextField
                  placeholder={this.props.comment.body}
                  type="text"
                  name="body"
                  fullWidth
                  required
                  onChange={this.setBody.bind(this)}
                />
                <Button type="submit"> Submit</Button>
              </form>
            </div>
            :
            <div>
              <Typography>Comment was updated.</Typography>
            </div>
        }

      </div>
    );
  }
}

export default EditCommentNew;
