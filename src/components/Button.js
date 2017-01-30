import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <button className="button">{this.props.label}</button>
    );
  }
}

export default Button;
