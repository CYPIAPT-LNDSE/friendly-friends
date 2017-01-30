import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <p className="message">{this.props.text}</p>
    );
  }
}

export default Message;
