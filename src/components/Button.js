import React from 'react';

const Button = ({ label, handleEvent }) => {
  return (
    <button onClick={() => handleEvent(label)} className="button">{label}</button>
  );
}

export default Button;
