import React from 'react'
import ProjectsHeader from './ProjectsHeader.jsx'
import ProjectsSummary from './ProjectsSummary.jsx'
import ProjectsDemo from './ProjectsDemo.jsx'

export default class Projects extends React.Component {

  state = {
    activeProject: this.props.projectList[0],
  }

  setActiveProject = (project) => {
    this.setState({
      activeProject: project
    })
  }

  findActive = () => {
    return this.props.projectList.find(project => {
      return project.active
    })
  }

  render() {
    return(
      <div className='projects-page-container'>
        <h2>{`Choose a project below:`}</h2>
        <ProjectsHeader
          projectList={this.props.projectList}
          activeProject={this.state.activeProject}
          setActiveProject={this.setActiveProject}>
        </ProjectsHeader>
        <section className='summary-demo-container'>
        <ProjectsSummary
          activeProject={this.state.activeProject}>
        </ProjectsSummary>
        <ProjectsDemo></ProjectsDemo>
        </section>
      </div>
    )
  }

  // componentDidMount() {
  //   this.setState({
  //     activeProject: this.findActive()
  //   })
  // }

}
