import React from 'react';

const obj = {
  stroke: (e) => console.log('stroke'),
  talk: (e) => console.log('talk'),
  feed: (e) => console.log('feed'),
  play: (e) => console.log('play')
}

const Button = (props) => {
  return (
    <button onClick={(e) => obj[props.label](e)} className="button">{props.label}</button>
  );
}

export default Button;
