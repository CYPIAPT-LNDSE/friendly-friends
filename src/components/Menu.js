import React from 'react';
import Button from './Button.js';

const Menu = (props) => {

  return (
    <header className="menu">
      <Button {...props} label="stroke" />
      <Button {...props} label="talk" />
      <Button {...props} label="feed" />
      <Button {...props} label="play" />
    </header>
  );
};

export default Menu;
