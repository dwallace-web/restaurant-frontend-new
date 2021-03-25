import React, { Component } from 'react';
import TagManager from 'react-gtm-module';
import Parent from './components/layout/Parent';

const tagManagerArgs = {
  gtmId: 'GTM-W35BT76',
  events: {
    signUp: 'User Sign Up',
    signIn: 'User Sign In',
    failed: 'Authentification Blocked'
  }
}

TagManager.initialize(tagManagerArgs)

export class App extends Component {
  render() {
    return (
      <div>
        <Parent />
      </div>
    );
  }
}

export default App;
