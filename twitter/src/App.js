import React, { Component } from 'react';
import './App.css';
import { userData, tweets } from './application-data';

import { NavBar } from './components/NavBar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import { StatBar } from './components/StatBar';
import { Profile } from './components/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }

  tweetStats() {
    return true;
  }

  render() {
    return (
      <div className="App">
        <NavBar userData={ userData } />
        <Jumbotron />
        <StatBar tweets={ tweets } userData={ userData } />
        <Profile userData={ userData } tweets={ tweets } />
      </div>
    );
  }
}

export default App;
