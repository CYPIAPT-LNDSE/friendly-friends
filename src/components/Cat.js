import React from "react";

const Cat = (props) => {
  const classes = `cat ${props.isBouncing ? "backflip" : ""}`;
  return (
    <img alt="friendly cat" className={classes} src="./cat.png" />
  );
}

export default Cat;
