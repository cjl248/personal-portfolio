import React from 'react'

export default function FooterContainer() {

  const renderAtomSVG = () => {
    return  (
      <img
        src={require("../assets/atom-io-logo.svg")}
        className="atom-logo"
        alt={""}
        height="60px"
        width="120px">
      </img>
    )
  }

  const renderJavascriptSVG = () => {
    return  (
      <img
        src={require("../assets/javascript.svg")}
        className="javascript-logo"
        alt={""}
        height="30px"
        width="30px">
      </img>
    )
  }

  const renderReactSVG = () => {
    return  (
      <img
        src={require("../assets/react.svg")}
        className="react-logo"
        alt={""}
        height="30px"
        width="30px">
      </img>
    )
  }

  const renderSassSVG = () => {
    return  (
      <img
        src={require("../assets/sass.svg")}
        className="sass-logo"
        alt={""}
        height="30px"
        width="30px">
      </img>
    )
  }

  return (
    <section className='footer-container'>
      <span>
        <p className='large-size'>{`Made with ❤️ by`}</p>
        <p className='small-size'>{`By`}</p>
        <a
          href={`https://www.linkedin.com/in/chris-liendo/`}
          className='footer-linkedin-anchor'>
          {`Chris Liendo`}
        </a>
        <p>{`on`}</p>
        {renderAtomSVG()}
        <p>{`using`}</p>
        {renderJavascriptSVG()}
        <p>{`+`}</p>
        {renderReactSVG()}
        <p>{`+`}</p>
        {renderSassSVG()}
      </span>
    </section>
  )
}
