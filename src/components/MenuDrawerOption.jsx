import React from 'react'
import { IconContext } from "react-icons"
import { MdDescription, MdWeb, MdWork, MdPerson } from 'react-icons/md'

export default function MenuDrawerOption(props) {

  const iconComponents = {
    resume: <MdDescription></MdDescription>,
    projects: <MdWeb></MdWeb>,
    experience: <MdWork></MdWork>,
    about: <MdPerson></MdPerson>,
  }

  const contextValue = {
    className: 'option-icon',
    size: '1.9rem',
  }

  const formatPageName = () => {
    return props.page[0].toUpperCase()+props.page.slice(1)
  }

  return(
      <div
        className='menu-drawer-option'
        onClick={()=>{props.setActivePage(props.page)}}>
        <IconContext.Provider
          value={contextValue}>
          {iconComponents[props.page]}
        </IconContext.Provider>
        <span
          className='option-text'>
          {formatPageName()}
        </span>
      </div>
  )
}
