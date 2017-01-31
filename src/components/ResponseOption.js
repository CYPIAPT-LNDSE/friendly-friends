import React from 'react';

const ResponseOption = (props) => {

  return (
    <p className="response-option" onClick={() => props.updateMessage(props.response.next)}>{props.response.text}</p>
  );
};

export default ResponseOption;
