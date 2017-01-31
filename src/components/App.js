import Menu from './Menu.js';
import Cat from './Cat.js';
import Message from './Message.js';

import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: false }
    this.showMessage = this.showMessage.bind(this);
  }

  showMessage () {
    this.setState({ message: true })
  };

  render() {
    return (
      <div className='container'>
        <Menu showMessage={this.showMessage} state={this.state} />
        {this.state.message ? <Message/> : null}
        <Cat />
      </div>
    );
  }
}

export default App;
