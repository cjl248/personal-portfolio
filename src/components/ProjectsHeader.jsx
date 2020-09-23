import React from 'react'

export default function ProjectsHeader(props) {

  const handleOptionClick = (project) => {
    props.setActiveProject(project)
  }

  const resolveStyle = (project) => {
    return project === props.activeProject ? 'active-project-option' : 'inactive-project-option'
  }

  const renderProjectOptions = () => {
    return props.projectList.map((project, index) => {
      return(
        <span
          key={index}
          className={resolveStyle(project)}
          onClick={()=>{handleOptionClick(project)}}>
          {project.name}
        </span>
      )
    })
  }

  return(
    <section className='projects-header-container'>
      {renderProjectOptions()}
    </section>
  )
  
}
