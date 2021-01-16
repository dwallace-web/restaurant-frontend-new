import { type } from 'os';
import React, { Component } from 'react';
import Body from './components/layout/Body';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Body />
      </div>
    );
  }
}

export default App;
