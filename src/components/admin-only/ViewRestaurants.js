import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard';

export class ViewRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantdata: null,
    };
  }
  componentDidMount() {
    // this.tokenFinder(); //get the token & find out if a user is an admin
    // this.getUserRestaurants();

    console.log('getting started');

    fetch('http://localhost:2000/restaurant/user', {
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      }),
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ restaurantdata: data });
        // data.map((restaurant, index) => {
        //   // console.log(index, restaurant);

        //   const rest = document.querySelector('.restaurantview');
        //   const card = document.createElement('div');
        //   const cardTitle = document.createElement('h5');
        //   const cardNumber = document.createElement('p');
        //   const cardAddress = document.createElement('p');
        //   const buttonEdit = document.createElement('Button');
        //   const buttonDelete = document.createElement('Button');

        //   cardTitle.innerText = restaurant.name;
        //   cardNumber.innerText = restaurant.phonenumber;
        //   cardAddress.innerText = restaurant.address;

        //   buttonEdit.innerText = 'Edit';
        //   buttonDelete.innerText = 'Delete';

        //   rest.appendChild(card);

        //   card.appendChild(cardTitle);
        //   card.appendChild(cardNumber);
        //   card.appendChild(cardAddress);

        //   card.appendChild(buttonEdit);
        //   card.appendChild(buttonDelete);

        //   return card;
        // });
      })
      .catch((error) => {
        console.log('error--->', error);
      });

    console.log('getting finished!');
  }

  render() {
    return (
      <div>
        <h2>My Restaurants</h2>
        <RestaurantCard
          token={this.props.token}
          login={this.props.login}
          restaurantdata={this.state.restaurantdata}
        />
        <div className="restaurantview"></div>
      </div>
    );
  }
}

export default ViewRestaurants;
