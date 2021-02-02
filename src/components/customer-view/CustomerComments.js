import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';

export class CustomerComments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.comment.map((comment) => (
      <Grid key={comment.id} className="single-comment" style={{ marginBottom: 10 }} >
        <Typography variant="subtitle2" > {comment.title}</Typography>
        <Typography variant="caption" gutterBottom>{comment.body}</Typography>
      </Grid>
    ));
  }
}

export default CustomerComments;
