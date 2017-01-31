import React from 'react';

const obj = {
  stroke: (e) => console.log('stroke'),
  feed: (e) => console.log('feed'),
  play: (e) => console.log('play')
}

const Button = (props) => {
  return (
    <button onClick={props.showMessage} className="button">{props.label}</button>
  );
}

export default Button;
