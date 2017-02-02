import React from "react";

const ResponseOption = (props) => {

  return (
    <p className="answer clickable" onClick={() => props.updateMessage(props.response)}>{props.response.text}</p>
  );
};

export default ResponseOption;
