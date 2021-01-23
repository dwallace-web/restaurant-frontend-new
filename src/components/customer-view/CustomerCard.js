import React, { Component } from 'react';
import CustomerComments from './CustomerComments';

export class CustomerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: [],
    };
  }

  componentDidMount() {
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
    // console.log('comment fetch finished!');
  }

  createComment = (e) => {
    e.preventDefault();
    console.log('works');

    const input = {
      title: this.title,
      body: this.body,
      restaurantid: this.props.restaurant.id,
    };

    console.log('test input -->', input);

    try {
      // const input = this.state;
      fetch(`http://localhost:2000/comment/`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: this.props.token,
        }),
        body: JSON.stringify(input),
      })
        .then((response) => response.json())
        .then((comment) => {
          console.log('comment---> ', comment);
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
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
        <p className="`restaurantaddress`">Address: {address}</p>
        <p className="restaurantphone">Phone Number: {phonenumber}</p>
        <p className="restaurantcat">Category: {category}</p>
        <div className="restaurantcomments">
          {this.state.comment === '' ? (
            <br />
          ) : (
            <CustomerComments
              token={this.props.token}
              comment={this.state.comment}
            />
          )}

          {this.props.login === true ? (
            <form onSubmit={this.createComment}>
              <input
                placeholder="Comment Title"
                type="text"
                name="title"
                onChange={(e) => (this.title = e.target.value)}
              />
              <input
                placeholder="Comment Details"
                type="text"
                name="body"
                onChange={(e) => (this.body = e.target.value)}
              />
              <button type="submit"> Submit</button>
            </form>
          ) : (
            <br />
          )}
        </div>
      </div>
    );
  }
}

export default CustomerCard;
