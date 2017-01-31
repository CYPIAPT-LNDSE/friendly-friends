import Menu from './Menu.js';
import Cat from './Cat.js';
import Message from './Message.js';

import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='container'>
        <Menu />
        <Message/>
        <Cat />
      </div>
    );
  }
}

export default App;
