import React from 'react'
import Resume from '../components/Resume.jsx'
import About from '../components/About.jsx'
import Projects from '../components/Projects.jsx'
import Experience from '../components/Experience.jsx'


export default function DetailContainer(props) {
  
  const projectList = require('../data/projects.json')

  const detailComponents = {
    resume: <Resume></Resume>,
    about: <About></About>,
    projects: <Projects projectList={projectList}></Projects>,
    experience: <Experience></Experience>
  }

  return (
    <div className='detail-container'>
      {detailComponents[props.activePage]}
    </div>
  )

}
