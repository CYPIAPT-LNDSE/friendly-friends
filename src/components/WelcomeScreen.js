import React from 'react';

class WelcomeScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
      e.preventDefault();
      console.log(this.input.value);
      this.props.setUsername(this.input.value);
    }

    render() {
    return (
      <div className="welcomeScreen">
        <img alt="Welcome cat" src="./cat.png" className="welcomeImage"/>
        <p className="welcomeText">{"Hi! Great to meet you. I'm Sammy. What's your name?"}</p>
        <form className="welcomeForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="welcomeInput"
            ref={(input) => this.input = input} />
          <button type="submit" label="Submit">Submit</button>
        </form>
      </div>
    );
  };
};

export default WelcomeScreen;
