import React from 'react';

class CallToAction extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let imgSrc = "./cat.png";
    let ctaText = "It sounds like you're feeling anxious. CAMHS can help you find out what to do next.";
    let ctaURL = "http://www.youngminds.org.uk/for_parents/services_children_young_people/camhs";
    let ctaLinkText = "Visit CAMHS";
    return (
      <div className="callToAction">
        <img src={imgSrc} className="ctaImage"/>
        <p>{ctaText}</p>
        <a href={ctaURL}>{ctaLinkText}</a>
      </div>
    );
  }
}

export default CallToAction;
