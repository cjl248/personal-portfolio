import React from 'react'
let projectList = require('../data/projects.json')

export default class Projects extends React.Component {

  state = {
    activeProjectString: 'Clarity',
    activeProjectObj: null,
    projects: []
  }

  findActive = () => {
    return projectList.find(project => {
      return this.state.activeProject === project.name
    })
  }

  setProject = (name) => {
    const updatedProjects = this.state.projects.map(project => {
      if (name === project.name) {
        return {
          name: project.name,
          active: true,
        }
      } else {
        return {
          name: project.name,
          active: false,
        }
      }
    })
    this.setState({
      activeProjectString: name,
      projects: updatedProjects,
    })
  }

  renderOptions = () => {
    return this.state.projects.map((project, index) =>{
      return (
        <span
          key={index}
          onClick={()=>{this.setProject(project.name)}}
          className={project.active ? 'active-project-option' : 'inactive-project-option'}>
          {project.name}
        </span>
      )
    })
  }

  renderBullets = (project) => {
    return project.description.map((sentence, index) => {
      return ( <li key={index}>{sentence}</li> )
    })
  }

  renderDescription = () => {
    if (this.state.activeProject) {
      const project = this.findActive()
      return (
        <>
          <div>{`${this.state.activeProject}`}</div>
          <span>{`Tech Stack: ${project.tech}`}</span>
          <ul>{this.renderBullets(project)}</ul>
        </>
      )
    }
  }

  render() {
    // console.log(this.findActive())
    return(
      <div className='projects-page-container'>
        <h2>{`Choose a project below:`}</h2>
        <section className='projects-header-container'>
          {this.renderOptions()}
        </section>

        <section className='projects-summary-container'>
          {this.renderDescription()}
        </section>

        <section className='projects-video-container'>
        </section>
      </div>
    )
  }

  componentDidMount() {
    const activeProjectObj = this.findActive()
    this.setState({
      projects: projectList,
      activeProjectObj
    })
  }

}
