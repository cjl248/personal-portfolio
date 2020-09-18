import React from 'react'
import { MdDescription, MdWeb, MdWork, MdPerson } from 'react-icons/md'

export default function MenuDrawerOption(props) {

  const iconComponents = {
    resume: <MdDescription></MdDescription>,
    projects: <MdWeb></MdWeb>,
    experience: <MdWork></MdWork>,
    about: <MdPerson></MdPerson>,
  }

  const formatPageName = () => {
    return props.page[0].toUpperCase()+props.page.slice(1)
  }

  return(
    <div className='menu-drawer-option'>
        <span className='option-icon'>{iconComponents[props.page]}</span>
        <span className='option-text'>{formatPageName()}</span>
    </div>
  )
}
