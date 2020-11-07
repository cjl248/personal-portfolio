import React from 'react'
import ExperienceGroup from './ExperienceGroup.jsx'

export default function Experience() {

  const experienceList = require('../data/experience.json')

  const renderExperience = () => {
    return experienceList.map((exp, index) => {
      return (
        <ExperienceGroup
          experience={exp}
          key={index}>
        </ExperienceGroup>
      )
    })
  }

  return(
    <div className='experience-container'>
      <section className='experience-header'>
        <span>{`Professional Experience`}</span>
      </section>
      <section className='experience-main'>
        {renderExperience()}
      </section>
    </div>
  )

}
