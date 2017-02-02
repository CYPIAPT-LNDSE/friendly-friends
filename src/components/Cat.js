import React from 'react';

const Cat = ({ initiateConversation }) => {
  return (
    <img onClick={() => initiateConversation(12)} alt="friendly cat" className="cat" src="./cat.png" />
  );
}

export default Cat;
