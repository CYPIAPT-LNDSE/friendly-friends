import React, { Component } from 'react';

import Menu from '../containers/MenuContainer.js';
import Cat from './Cat.js';
import Message from './Message.js';
import CallToAction from './CallToAction.js';
import '../styles/App.css';

class App extends Component {
  render() {
    const { message, callToAction, updateMessage } = this.props;
    return (
      <div className='container'>
        {callToAction && <CallToAction {...callToAction} updateMessage={updateMessage}/>}
        <Menu />
        {message && <Message message={message} updateMessage={updateMessage}/>}
        <Cat />
      </div>
    );
  }
}

export default App;
