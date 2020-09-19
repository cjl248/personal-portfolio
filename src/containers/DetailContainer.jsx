import React from 'react'
import Resume from '../components/Resume.jsx'
import About from '../components/About.jsx'
import Projects from '../components/Projects.jsx'
import Experience from '../components/Experience.jsx'

export default function DetailContainer(props) {

  const detailComponents = {
    resume: <Resume></Resume>,
    about: <About></About>,
    projects: <Projects></Projects>,
    experience: <Experience></Experience>
  }

  return (
    <div className='detail-container'>
      <span>{detailComponents[props.activePage]}</span>
    </div>
  )

}
