import React from 'react';
import ResponseOption from './ResponseOption.js';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.updateMessage = this.updateMessage.bind(this);
  }
  updateMessage(next) {
    // TODO - dispatch action here
  }
  render() {
    const { message } = this.props;
    return (
      <div className="message">
        <p>{message.text}</p>
        {message.responses.map((response, i) =>
          <ResponseOption updateMessage={this.updateMessage}
                          response={response}
                          key={i} />
        )}
      </div>
    );
  }
}

export default Message;
