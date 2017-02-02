import React, { Component } from 'react';

import Menu from '../containers/MenuContainer.js';
import Cat from './Cat.js';
import Message from './Message.js';
import CallToAction from './CallToAction.js';
import WelcomeScreen from './WelcomeScreen.js'
import '../styles/App.css';

class App extends Component {
  render() {
    const { message, callToAction, updateMessage, initiateConversation, welcome } = this.props;
    return (
      <div className='container'>
        {welcome && <WelcomeScreen />}
        {callToAction && <CallToAction {...callToAction} updateMessage={updateMessage}/>}
        <Menu />
        {message && <Message message={message} updateMessage={updateMessage}/>}
        <Cat initiateConversation={initiateConversation} />
      </div>
    );
  }
}

export default App;
