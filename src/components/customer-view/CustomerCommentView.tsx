import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';

type CommentProps = {
  token: string,
  comment: any,
}
type CommentState = {
  test: string
}

class CustomerCommentView extends React.Component <CommentProps , CommentState> {
  constructor(props: CommentProps) {
    super(props);
    this.state = {
      test: '',
    }
  }

  render() {
    return this.props.comment.map((comment: any) => (
      <Grid key={comment.id} className="single-comment" style={{ marginBottom: 10 }} >
        <Typography variant="subtitle2" > {comment.title}</Typography>
        <Typography variant="caption" gutterBottom>{comment.body}</Typography>
      </Grid>
    ));
  }
}

export default CustomerCommentView;
