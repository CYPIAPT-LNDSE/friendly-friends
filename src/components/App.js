import Menu from './Menu.js';
import Cat from './Cat.js';
import Message from './Message.js';

import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: false };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent (action) {
    const handlers = {
      stroke: () => console.log('stroke'),
      feed: () => console.log('feed'),
      play: () => console.log('play'),
      talk: () => this.setState({ message: true })
    };

    handlers[action]();
  }

  render() {
    return (
      <div className='container'>
        <Menu handleEvent={ this.handleEvent } />
        {this.state.message && <Message/>}
        <Cat />
      </div>
    );
  }
}

export default App;
