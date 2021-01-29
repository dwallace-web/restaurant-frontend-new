import React, { Component } from 'react';
import CustomerComments from './CustomerComments';
import CreateComment from '../user/CreateComment';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export class CustomerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://localhost:2000/comment/restaurant/${this.props.restaurant.id}`,
      {
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: this.props.token,
        }),
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((comment) => {
        // console.log(restaurantdata);
        this.setState({ comment: comment.data });
      })
      .catch((error) => {
        console.log('error--->', error);
      });
    // console.log('comment fetch finished!');
  }

  render() {
    const { id, name, address, phonenumber, category } = this.props.restaurant;

    return (
      <Grid
        key={id}
        item xs={12} sm container
        className="restaurantcard"
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom className="restaurantname">{name}</Typography>
            <Typography gutterBottom className="restaurantaddress">{address}</Typography>
            <Typography className="restaurantphone">{phonenumber}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className="restaurantcategory">{category}</Typography>
          </Grid>
          <Grid item>
            <div className="restaurantcomments">
              {this.state.comment.length < 1 ? (
                <div>
                  <Typography>No users have commented on this restaurant. </Typography>
                </div>
              ) : (
                  <div>
                    <Typography>Customer Comments</Typography>
                    <CustomerComments
                      token={this.props.token}
                      comment={this.state.comment}
                    />
                  </div>
                )}

              {this.props.login === true ? (
                <CreateComment
                  token={this.props.token}
                  restaurant={this.props.restaurant}
                />
              ) : (
                  <br />
                )}
            </div>
          </Grid>



        </Grid>


      </Grid>
    );
  }
}

export default CustomerCard;
