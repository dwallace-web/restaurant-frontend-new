import React, { Component } from 'react';
import Body from './components/layout/Body';
import Parent from './components/layout/Parent';

export class App extends Component {
  render() {
    return (
      <div>
        {/* <Body /> */}
        <Parent />
      </div>
    );
  }
}

export default App;
