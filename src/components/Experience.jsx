import React from 'react'
import ExperienceGroup from './ExperienceGroup.jsx'

export default function Experience() {

  const experienceList = [
    {
      name: 'Freelance',
      position: 'Software Engineer',
      start: 'Nov 2019',
      end: 'Present',
      experience: [
        "Calabria Pizza: redesigned a fullstack SPA with fullstack auth and admin dashboard according to client feature specifications",
        "Riskly (Rails API, JavaScript, React): a fullstack web app that investigates the correlation between different factors and risk of infection with SARS-CoV-2"
      ]
    },
    {
      name: 'Axelon Services Corporation',
      position: 'Technical Recruiter',
      start: 'Feb 2018',
      end: 'Jan 2019',
      experience: ["Successfully recruited for various technical positions such as Software Engineers (frontend, backend, fullstack, big data, micro-services, mobile), DevOps Engineers, Cloud Architects, Scrum Masters and IT Security Experts",
      "Responsible for high-volume cold calling, screening, interviewing and coaching qualified candidates through the hiring process using the internal ATS JobDiva, and various VMSes."
      ]
    },
    {
      name: 'Tutors on Wheels',
      position: 'Private Tutoring Manager',
      start: 'Jun 2016',
      end: 'Dec 2017',
      experience: [
        "More than tripled the number of active private tutors from 10 to 31 including MA and PhD educated teachers through an aggressive hiring plan based on unique client needs",
        "Acquired and retained new clients across all subjects and grade levels by assigning educators to uniquely fit student needs, learning styles and goals"
      ]
    },
    {
      name: 'Tutors on Wheels',
      position: 'Tutor (SAT, SHSAT)',
      start: 'Jan 2016',
      end: 'May 2016',
      experience: null
    }
  ]

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
