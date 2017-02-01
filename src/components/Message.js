import React from 'react';
import ResponseOption from './ResponseOption.js';

class Message extends React.Component {
  render() {
    const { message, updateMessage } = this.props;
    return (
      <div className="message">
        <p className="question">{message.text}</p>
        {message.responses.map((response, key) =>
          <ResponseOption updateMessage={ updateMessage }
                          response={ response }
                          key={ key } />
        )}
      </div>
    );
  }
}

export default Message;
