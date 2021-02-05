import React, { Component } from 'react';
import CustomerBioPanel from './CustomerBioPanel';
import { Typography, Grid } from '@material-ui/core'
import API_URL from '../../helpers/environment';

type BioProps = {
  token: string,
  login: boolean
}

type BioState = {
  comment: any,
  deleteme: boolean,
  deletedcomment: boolean
}

class CustomerBiography extends React.Component <BioProps , BioState> {
  constructor(props: BioProps) {
    super(props);

    this.state = {
      comment: [],
      deleteme: false,
      deletedcomment: false,
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/comment/user`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      }),
      method: 'GET',
    })
      .then((response) => response.json())
      .then((usercomment) => {
        console.log(usercomment);
        this.setState({ comment: usercomment.data });
      })
      .catch((error) => {
        console.log('error--->', error);
      });
    console.log('res fetch finished!');
  }

  deleteComment = (id: number) => {
    // e.preventDefault();
    console.log('works', id);
    if (this.state.deleteme === false) {
      this.setState({ deleteme: true })
      console.log('prep to delete')
    } else {
      try {
        fetch(`${API_URL}/comment/restaurant/${id}`, {
          method: 'DELETE',
          headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: this.props.token,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.setState({ deletedcomment: true });
          });
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  render() {
    return (
      <Grid alignItems="center" spacing={3}>
        <Typography variant="h4" align="center">My comments</Typography>

        <CustomerBioPanel
          comment={this.state.comment}
          deleteComment={this.deleteComment}
          token={this.props.token}
        />
      </Grid>
    );
  }
}

export default CustomerBiography;
