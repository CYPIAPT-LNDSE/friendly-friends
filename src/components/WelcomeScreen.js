import React from "react";

class WelcomeScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ""};
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
      e.preventDefault();
      this.props.setUsername(this.input.value);
    }

    render() {
    return (
      <div className="modal welcome">
        <img alt="Welcome cat" src="./cat.png" className="modal--image"/>
        <p className="welcome--text">{"Hi! Great to meet you. I'm Sammy. What's your name?"}</p>
        <form className="welcome--form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="form--input"
            ref={(input) => this.input = input} />
          <button type="submit" label="Submit">Go!</button>
        </form>
      </div>
    );
  };
};

export default WelcomeScreen;
