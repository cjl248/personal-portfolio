import React from 'react'

export default function ProjectsSummary(props) {

  const renderBullets = () => {
    return props.activeProject.description.map((sentence, index)=> {
      return ( <li key={index}>{sentence}</li> )
    })
  }

  return(
    <div className='projects-summary-container'>
      <div
        className='summary-title'>
        {props.activeProject.name}
      </div>
      <div
        className='summary-tech'>
        {`Tech Stack: ${props.activeProject.tech}`}
      </div>
      <ul
        className='summary-bullets'>
        {renderBullets()}
      </ul>
    </div>
  )

}
