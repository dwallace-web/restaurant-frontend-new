import React, { Component } from 'react';
import EditComment from './EditComment';
import { Typography, Button, Card, CardContent } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Subtitles } from '@material-ui/icons';

export class CustomerBioComment extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    const { title, body, id } = this.props.comment;

    return (
      <Card>
        <CardContent>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography >{body}</Typography>
          <EditComment token={this.props.token} comment={this.props.comment} />
          <Button onClick={this.props.deleteComment.bind(this, id)} variant="contained" color="secondary">
            Doubleclick to delete comment
          </Button>
        </CardContent>
      </Card>
    )
  }
}

export default CustomerBioComment;
