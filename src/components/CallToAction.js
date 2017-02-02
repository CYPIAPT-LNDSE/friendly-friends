import React from 'react';

class CallToAction extends React.Component {

  handleClick () {
    this.props.updateMessage({ state: "idle", value: "" })
  }

  render() {
    let { imgSrc, ctaText, ctaURL, ctaLinkText } = this.props
    return (
      <div className="modal callToAction">
        <p className="callToAction--button" onClick={() => this.handleClick()} >X</p>
        <img alt="Call to action" src={imgSrc} className="modal--image"/>
        <p>{ctaText}</p>
        <a href={ctaURL}>{ctaLinkText}</a>
      </div>
    );
  }
}

export default CallToAction;
