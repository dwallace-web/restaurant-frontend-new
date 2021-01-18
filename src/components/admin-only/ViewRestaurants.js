import React, { Component } from 'react';

export class ViewRestaurants extends Component {
  constructor() {
    super();
    this.token = 'null';
  }
  componentDidMount() {
    // this.tokenFinder(); //get the token & find out if a user is an admin
    // this.getUserRestaurants();

    console.log('getting started');

    fetch('http://localhost:2000/restaurant/user', {
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTAsImlhdCI6MTYxMDkzMTMzNCwiZXhwIjoxNjEwOTc0NTM0fQ.ZkZ8DjNt3lru1WaxyeAYc0BWfL0veyi8DVJbZDPcL6o',
      }),
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.map((restaurant, index) => {
          console.log(index, restaurant);

          const rest = document.querySelector('.restaurantview');
          const card = document.createElement('div');
          const cardinfo = document.createElement('p');

          console.log(restaurant.name);
          console.log(restaurant.address);
          console.log(restaurant.phonenumber);

          cardinfo.innerText = restaurant.name;

          rest.appendChild(card);

          return card;
        });
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
        <div className="restaurantview"></div>
      </div>
    );
  }
}

export default ViewRestaurants;
