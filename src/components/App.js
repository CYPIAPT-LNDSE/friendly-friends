import React, { Component } from 'react';

import Menu from './Menu.js';
import Cat from './Cat.js';
import Message from './Message.js';
import CallToAction from './CallToAction.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // props.state will be idle, message, or call to action
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent (action) {
    const handlers = {
      stroke: () => console.log('stroke'),
      feed: () => console.log('feed'),
      play: () => console.log('play'),
      talk: () => this.setState({ message: true }),
      showCTA: () => this.setState({ callToAction: true })
    };

    handlers[action]();
  }

  render() {

    return (
      <div className='container'>
        {this.props.status === "callToAction" && <CallToAction/>}
        <Menu handleEvent={ this.handleEvent } />
        {this.props.status === "message" && <Message/>}
        <Cat />
      </div>
    );
  }
}

export default App;
