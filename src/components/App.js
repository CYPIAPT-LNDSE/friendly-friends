import React, { Component } from 'react';

import Menu from '../containers/MenuContainer.js';
import Cat from './Cat.js';
import Message from './Message.js';
import CallToAction from './CallToAction.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { message, callToAction } = this.props;
    return (
      <div className='container'>
        {callToAction && <CallToAction value={callToAction}/>}
        <Menu />
        {message && <Message message={message}/>}
        <Cat />
      </div>
    );
  }
}

export default App;
