import React from 'react'
import Resume from '../components/Resume.jsx'
import About from '../components/About.jsx'
import Projects from '../components/Projects.jsx'
import Experience from '../components/Experience.jsx'
import NotFound from '../components/NotFound.jsx'
import { Switch, Route } from 'react-router-dom'

export default function DetailContainer(props) {

  const projectList = require('../data/projects.json')

  const detailComponents = {
    resume: <Route exact path='/resume' component={Resume}></Route>,
    about: <Route exact path='/about' component={About}></Route>,
    projects: <Route exact path='/projects' render={() => <Projects projectList={projectList} />}></Route>,
    experience: <Route exact path='/experience' component={Experience}></Route>
  }

  return (
    <div className='detail-container'>
      <Switch>
        {detailComponents[props.activePage]}
        <Route exact path='' component={About}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  )

}
