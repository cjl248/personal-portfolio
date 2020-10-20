import React from 'react'

export default function ProjectsDemo(props) {

  console.log(props);
  return (
    <div className='projects-video-container'>
      <video
        src={props.video}>
      </video>
    </div>
  )

}
