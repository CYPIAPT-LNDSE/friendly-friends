import Menu from './Menu.js'
import Cat from './Cat.js'
import Message from './Message.js'

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <Message text="hi i r cat >^_^<"/>
        <Cat />
      </div>
    );
  }
}

export default App;
