import React from 'react'
import Resume from '../components/Resume.jsx'
import About from '../components/About.jsx'
import Projects from '../components/Projects.jsx'
import Experience from '../components/Experience.jsx'
import NotFound from '../components/NotFound.jsx'
import { Switch, Route, withRouter } from 'react-router-dom'

function DetailContainer(props) {

  const projectList = require('../data/projects.json')

  const detailComponents = {
    resume: <Route exact path='/resume' component={Resume}></Route>,
    about: <Route exact path='/about' component={About}></Route>,
    projects: <Route exact path='/projects' render={() => <Projects projectList={projectList} />}></Route>,
    experience: <Route exact path='/experience' component={Experience}></Route>
  }

  const renderDetailComponents = () => {
    let history = props.history
    if (history.action.toString() === 'PUSH') {
      return detailComponents[props.activePage]
    } else if (history.action.toString() === 'POP'){
      const activeComponent = history.location.pathname.slice(1)
      return detailComponents[activeComponent]
    }
  }

  return (
    <div className='detail-container'>
      <Switch>
        {renderDetailComponents()}
        <Route exact path='' component={About}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  )

}

export default withRouter(DetailContainer)
