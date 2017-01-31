import React from 'react';
import ResponseOption from './ResponseOption.js';

const convo = {
  1: {
    text: 'Hi! how are you feeling',
    responses: [
      { text: 'I feel sad', next: 2 },
      { text: 'I am happy!', next: 3}
    ]
  },
  2: {
    text: 'Why are you sad',
    responses: [
      { text: 'I don\'t know', next: 3}
    ]
  },
  3: {
    text: 'Great, me too!',
    responses: [
      { text: 'I don\'t know', next: 3}
    ]
  }
};

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
