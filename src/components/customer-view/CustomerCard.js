import React, { Component } from 'react';
import CustomerComments from './CustomerComments';
import CreateComment from '../user/CreateComment';

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
      <div className="restaurantcard" key={id}>
        <h5 className="restaurantname">Name: {name}</h5>
        <p className="`restaurantaddress`">Address: {address}</p>
        <p className="restaurantphone">Phone Number: {phonenumber}</p>
        <p className="restaurantcat">Category: {category}</p>
        <div className="restaurantcomments">
          {this.state.comment.length < 1 ? (
            <div>
              <p>No users have commented on this restaurant. </p>
            </div>
          ) : (
            <CustomerComments
              token={this.props.token}
              comment={this.state.comment}
            />
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
      </div>
    );
  }
}

export default CustomerCard;
