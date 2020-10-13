import React from 'react'
import ExperienceGroup from './ExperienceGroup.jsx'

export default function Experience() {
  return(
    <div className='experience-container'>
      <section className='experience-header'>
        <span>{`Professional Experience`}</span>
      </section>
      <section className='experience-main'>
        <span>{`Axelon Services, New York, NY`}</span>
        <span>{`Tutors on Wheels, Astoria, NY`}</span>
        <ExperienceGroup></ExperienceGroup>
      </section>
    </div>
  )
}
