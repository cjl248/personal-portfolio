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
          <a target='_blank' rel="noopener noreferrer" href={links.live}>{`Production`}</a>
        </span>
      )
    } else if (links.frontend && links.backend) {
      return (
        <span className='summary-links'>
          <a target='_blank' href={links.frontend} rel="noopener noreferrer">{`Frontend`}</a>
          {` | `}
          <a target='_blank' href={links.backend} rel="noopener noreferrer">{`Backend`}</a>
        </span>
      )
    } else if (links.frontend && !links.backend) {
      return (
        <span className='summary-links'>
          <a target='_blank' href={links.frontend} rel="noopener noreferrer">{`Repository`}</a>
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
      <ul className='summary-bullets'>
        {renderBullets()}
      </ul>
    </div>
  )

}
