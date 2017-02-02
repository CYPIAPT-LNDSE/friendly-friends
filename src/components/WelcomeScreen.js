import React from 'react';
import Button from './Button.js';

const WelcomeScreen = (props) => {

    // handleClick () {
    //   // this.props.updateMessage({ state: "idle", value: "" })
    // }

    return (
      <div className="welcomeScreen">
        <img alt="Welcome cat" src="./cat.png" className="welcomeImage"/>
        <p>{"Hi! Great to meet you. I'm Sammy. What's your name?"}</p>
        <input type="text" placeholder="Enter your name" name="name" className="welcomeInput"/>
        <Button label="Submit" />
      </div>
    );
};

export default WelcomeScreen;
