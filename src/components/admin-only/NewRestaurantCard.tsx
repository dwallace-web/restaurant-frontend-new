import React, { Component } from 'react';
import API_URL from '../../helpers/environment';
import { Typography, Button, TextField, Card, CardContent } from '@material-ui/core'
import EditRestaurantView from './EditRestaurantView';
import CreateNewComment from '../user/CreateNewComment';
import CustomerCommentView from '../customer-view/CustomerCommentView';

type NewCardProps = {
  login: boolean,
  token: string,
  restaurant: {
    id: number, 
    name: string,
    address: string,
    phonenumber: string,
    category: string
  },
  deleteRestaurant: any,
}

type NewCardState = {
  isOpen: boolean,
  comment: any,
}

class NewRestaurantCard extends React.Component <NewCardProps, NewCardState> {
  constructor(props:NewCardProps) {
    super(props);

    this.state = {
      isOpen: false, 
      comment: [],
    };
  }

  componentDidMount() {
    // this.tokenFinder(); //get the token & find out if a user is an admin
    // this.getUserRestaurants();
    // console.log('fetch started');
    fetch(
      `${API_URL}/comment/restaurant/${this.props.restaurant.id}`,
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
    console.log('fetch finished!');
  }

  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    // console.log('card', this.props.restaurant);

    const { name, address, phonenumber, category } = this.props.restaurant;

    return (
      <div>
        <div className="restaurantcard" style={{ marginBottom: 10 }} >
          <Typography className="restaurantname">Name: {name}</Typography>
          <Typography className="`restaurantaddress`">Address: {address}</Typography>
          <Typography className="restaurantphone">Phone Number: {phonenumber}</Typography>
          <Typography className="restaurantcat">Category: {category}</Typography>
        </div>

        <div style={{ marginBottom: 10 }} >
          {/* <EditRestaurant
            restaurant={this.props.restaurant}
            token={this.props.token}
            deleteRestaurant={this.props.deleteRestaurant}
          /> */}
          <EditRestaurantView
          restaurant={this.props.restaurant}
          token={this.props.token}
          deleteRestaurant={this.props.deleteRestaurant}
          />

          
        </div>

        <div className="restaurantcomments" style={{ marginBottom: 10 }} >
          {this.state.comment.length === 0 ? (
            <div>
              <Typography>No users have commented on this restaurant.</Typography>
            </div>
          ) : (
              <CustomerCommentView 
              token={this.props.token}
              comment={this.state.comment}
              />
              /* <CustomerComments
                token={this.props.token}
                comment={this.state.comment}
              /> */
            )}

          {this.props.login === true ? (
            <div style={{ marginBottom: 10 }} >
              {/* <CreateComment
                token={this.props.token}
                restaurant={this.props.restaurant}
              /> */}
              <CreateNewComment 
                token={this.props.token}
                restaurant={this.props.restaurant}
              />
            </div>
          ) : null}
        </div>
        <br />
      </div>
    );
  }
}

export default NewRestaurantCard;
