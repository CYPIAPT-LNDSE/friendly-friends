import React, { Component } from "react";

import Menu from "../containers/MenuContainer.js";
import Cat from "./Cat.js";
import Message from "./Message.js";
import CallToAction from "./CallToAction.js";
import Ball from "./Ball.js";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBouncing: false
    }
    this.makeBounce = this.makeBounce.bind(this);
  }
  makeBounce() {
    /* HACK ATTACK */
    if(this.state.isBouncing) { return; }
    this.setState({ isBouncing: true });
    window.setTimeout(() => {
      this.setState({ isBouncing: false });
    }, 1000);
  }
  render() {
    const { message, callToAction, updateMessage, isPlaying, initiateConversation } = this.props;
    const { isBouncing } = this.state;
    return (
      <div className="container">
        {callToAction && <CallToAction {...callToAction} updateMessage={updateMessage}/>}
        <Menu />
        {message && <Message message={message} updateMessage={updateMessage}/>}
        <Cat isBouncing={isBouncing} initiateConversation={initiateConversation}/>
        {isPlaying && <Ball isBouncing={isBouncing} handleClick={this.makeBounce}/>}
      </div>
    );
  }
}

export default App;
