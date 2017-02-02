import React from "react";

const Cat = ({ initiateConversation, isBouncing }) => {
  const classes = `cat ${isBouncing ? "backflip" : ""}`;
  return (
    <img onClick={() => initiateConversation(12)} alt="friendly cat" className={classes} src="./cat.png" />
  );
}

export default Cat;
