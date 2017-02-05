import React from "react";

class CallToAction extends React.Component {

  handleClick () {
    this.props.updateMessage({ state: "idle", value: "" })
  }

  render() {
    let { imgSrc, ctaText, ctaURL, ctaLinkText } = this.props
    return (
      <div className="modal callToAction">
        <p className="callToAction--button clickable" onClick={() => this.handleClick()} >X</p>
        <img alt="Call to action" src={imgSrc} className="modal--image"/>
        <p className="callToAction--text">{ctaText}</p>
        <a className="clickable" href={ctaURL}>{ctaLinkText}</a>
      </div>
    );
  }
}

export default CallToAction;
