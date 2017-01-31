import React from 'react';
import ResponseOption from './ResponseOption.js';
import convo from '../resources/conversation.json';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversation: convo[1]
    };
    this.updateMessage = this.updateMessage.bind(this);
  }
  updateMessage(next) {
    this.setState({ conversation: convo[next] });
  }
  render() {
    const { conversation } = this.state;
    return (
      <div className="message">
        <p>{conversation.text}</p>
        {conversation.responses.map(response =>
          <ResponseOption updateMessage={this.updateMessage}
                          response={response} />
        )}
      </div>
    );
  }
}

export default Message;
