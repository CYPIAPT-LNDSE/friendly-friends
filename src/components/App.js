import Menu from './Menu.js';
import Cat from './Cat.js';
import Message from './Message.js';

import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: false }
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent (label) {
    const obj = {
      stroke: (e) => console.log('stroke'),
      feed: (e) => console.log('feed'),
      play: (e) => console.log('play'),
      talk: () => this.setState({ message: true })
    };

    obj[label]()
  };

  render() {
    return (
      <div className='container'>
        <Menu handleEvent={ this.handleEvent } />
        {this.state.message ? <Message/> : null}
        <Cat />
      </div>
    );
  }
}

export default App;
