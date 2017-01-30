import Menu from './Menu.js';
import Cat from './Cat.js';
import Message from './Message.js';

import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.options = ["I want to cry", "I feel ok"];
  }
  render() {
    return (
      <div className="container">
        <Menu />
        <Message text="Hi! How are you feeling today?" options={this.options}/>
        <Cat />
      </div>
    );
  }
}

export default App;
