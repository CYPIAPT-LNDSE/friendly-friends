import React from 'react';

class CallToAction extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick () {
    this.props.updateMessage({ state: "idle", value: "" })
  }

  render() {
    let { imgSrc, ctaText, ctaURL, ctaLinkText } = this.props.value
    return (
      <div className="callToAction">
        <p onClick={() => this.handleClick()} >X</p>
        <img src={imgSrc} className="ctaImage"/>
        <p>{ctaText}</p>
        <a href={ctaURL}>{ctaLinkText}</a>
      </div>
    );
  }
}

export default CallToAction;
