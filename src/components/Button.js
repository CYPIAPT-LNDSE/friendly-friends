import React, { Component } from 'react';

const Button = (props) => {
  return (
    <button className="button">{props.label}</button>
  );
}

export default Button;
