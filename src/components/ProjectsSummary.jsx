import React from 'react'

export default function ProjectsSummary(props) {

  const { links } = props.activeProject

  const renderBullets = () => {
    return props.activeProject.description.map((sentence, index)=> {
      return ( <li key={index}>{sentence}</li> )
    })
  }

  const renderLinks = () => {
    if (links.live) {
      return (
        <span className='summary-links'>
          <a href={links.live}>{`Production`}</a>
        </span>
      )
    } else if (links.frontend && links.backend) {
      return (
        <span className='summary-links'>
          <a href={links.frontend}>{`Frontend`}</a>
          {` | `}
          <a href={links.backend}>{`Backend`}</a>
        </span>
      )
    } else if (links.frontend && !links.backend) {
      return (
        <span className='summary-links'>
          <a href={links.frontend}>{`Repository`}</a>
        </span>
      )
    }
  }

  return(
    <div className='projects-summary-container'>
      <div className='summary-title'>
        {`${props.activeProject.name} - `}
        {renderLinks()}
      </div>
      <div className='summary-tech'>
        {`Tech Stack: ${props.activeProject.tech}`}
      </div>
      {/*<span className='summary-links'>
        {renderLinks()}
      </span>*/}
      <ul className='summary-bullets'>
        {renderBullets()}
      </ul>
    </div>
  )

}
