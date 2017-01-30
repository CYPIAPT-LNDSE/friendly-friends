import React, { Component } from 'react';
import Button from './Button.js';

class Menu extends Component {
  render() {
    return (
      <header className="menu">
        <Button label="stroke" />
        <Button label="talk" />
        <Button label="feed" />
        <Button label="play" />
      </header>
    );
  }
}

export default Menu;
