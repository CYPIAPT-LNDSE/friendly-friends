import React, { Component } from 'react';
import ResponseOption from './ResponseOption.js';

class Message extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="message">
        <p>{this.props.text}</p>
        {this.props.options.map(option => <ResponseOption text={option} />)}
      </div>
    );
  }
}

export default Message;
