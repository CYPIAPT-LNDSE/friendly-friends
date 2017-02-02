import React from 'react';
import ResponseOption from './ResponseOption.js';

class Message extends React.Component {
  render() {
    const { message, updateMessage, username } = this.props;
    message.text = message.text.replace("{username}", username)
    return (
      <div className="message-container">
        <div className="message">
          <p className="question">{message.text}</p>
          {message.responses.map((response, key) =>
            <ResponseOption updateMessage={ updateMessage }
                            response={ response }
                            key={ key } />
          )}
        </div>
      </div>
    );
  }
}

export default Message;
