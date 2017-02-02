import React from "react";

const Cat = ({ initiateConversation, isBouncing }) => {
  const classes = `cat ${isBouncing ? "backflip" : ""}`;
  return (
    <div className="cat-holder">
      <img onClick={() => initiateConversation(12)} alt="friendly cat" className={classes} src="./cat.png" />
    </div>
  );
}

export default Cat;
