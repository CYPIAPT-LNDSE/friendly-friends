import React from 'react';
import Button from './Button.js';

const Menu = (props) => {
  return (
    <header className="menu">
      <Button label="stroke" />
      <Button {...props} label="talk" />
      <Button label="feed" />
      <Button label="play" />
    </header>
  );
}

export default Menu;
