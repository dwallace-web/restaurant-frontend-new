import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';
import CustomerComments from '../customer-view/CustomerComments';
import CreateComment from '../user/CreateComment';
import EditRestaurant from './EditRestaurant';

export class RestaurantCard extends Component {
  constructor(props) {
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
    fetch(`http://localhost:2000/comment/${this.props.restaurant.id}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      }),
      method: 'GET',
    })
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

    const {
      id,
      name,
      address,
      phonenumber,
      category,
      socialmedia,
    } = this.props.restaurant;

    return (
      <div className="restaurantcard">
        <h5 className="restaurantname">Name: {name}</h5>
        <div className="restaurantbuttons">
          <Button onClick={this.toggle}>Edit</Button>{' '}
          <Button onClick={this.props.deleteRestaurant.bind(this, id)}>
            Delete
          </Button>
        </div>
        <p className="`restaurantaddress`">Address: {address}</p>
        <p className="restaurantphone">Phone Number: {phonenumber}</p>
        <p className="restaurantcat">Category: {category}</p>
        <div>
          <EditRestaurant
            restaurant={this.props.restaurant}
            token={this.props.token}
          />
        </div>
        <br />
        <div className="restaurantcomments">
          {this.state.comment.length === 0 ? (
            <div>
              <p>No users have commented on this restaurant.</p>
            </div>
          ) : (
            <CustomerComments
              token={this.props.token}
              comment={this.state.comment}
            />
          )}

          {this.props.login === true ? (
            <div>
              <CreateComment
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

export default RestaurantCard;
