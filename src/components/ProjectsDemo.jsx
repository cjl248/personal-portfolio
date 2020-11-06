import React from 'react'

export default function ProjectsDemo(props) {

  const { pictures } = props.activeProject.links

  const renderPictures = () => {
    if (!pictures) return
    return pictures.map((picture, index) => {
      const path = `../assets/project_pics/${picture}`
      return (
        <img
          src={require(`../assets/project_pics/${picture}`)}
          className="demo-picture"
          height={450}
          width={700}
          key={index}>
        </img>
      )
    })
  }

  return (
    <div className='projects-video-container'>
      {renderPictures()}
    </div>
  )

}
