import React, { Component } from 'react';
import ResponseOption from './ResponseOption.js';

const Message = (props) => {
  return (
    <div className="message">
      <p>{props.text}</p>
      {props.options.map(option => <ResponseOption text={option} />)}
    </div>
  );
}

export default Message;
