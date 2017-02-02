import React from "react";

const Ball = (props) => {
  const classes = `ball ${props.isBouncing ? "animated bounce" : ""}`;
  return (
    <div className={classes} onClick={props.handleClick}></div>
  );
};

export default Ball;
