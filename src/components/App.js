import React, { Component } from "react";

import Menu from "../containers/MenuContainer.js";
import Cat from "./Cat.js";
import Message from "./Message.js";
import CallToAction from "./CallToAction.js";
import WelcomeScreen from "./WelcomeScreen.js"
import Ball from "./Ball.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBouncing: false
    }
    this.makeBounce = this.makeBounce.bind(this);
  }
  makeBounce() {
    if(this.state.isBouncing) { return; }
    this.setState({ isBouncing: true });
    const timeoutID = window.setTimeout(() => {
      this.setState({ isBouncing: false });
    }, 1000);
    this.setState({ timeoutID });
  }
  componentWillUnmount() {
    /* Won't throw an exception even if timeoutID is undefined */
    window.clearTimeout(this.state.timeoutID);
  }
  render() {
    const { message, callToAction, updateMessage, isPlaying, initiateConversation, welcome, setUsername, username } = this.props;
    const { isBouncing } = this.state;

    return (
      <div className='container'>
        {welcome && <WelcomeScreen setUsername={setUsername} />}
        {callToAction && <CallToAction {...callToAction} updateMessage={updateMessage}/>}
        <Menu />
        {message && <Message username={username} message={message} updateMessage={updateMessage}/>}
        <Cat isBouncing={isBouncing} initiateConversation={initiateConversation}/>
        {isPlaying && <Ball isBouncing={isBouncing} handleClick={this.makeBounce}/>}
      </div>
    );
  }
}

export default App;
