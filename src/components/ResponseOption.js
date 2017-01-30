import React, { Component } from 'react';

class ResponseOption extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <p className="response-option">{this.props.text}</p>
    );
  }
}

export default ResponseOption;
