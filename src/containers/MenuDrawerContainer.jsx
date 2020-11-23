import React from 'react'
import MenuDrawerOption from '../components/MenuDrawerOption.jsx'
import { Link } from 'react-router-dom'

export default function MenuDrawerContainer(props) {

  const drawerClass = () => {
    return props.menuActive ? 'menu-drawer-container-active' : 'menu-drawer-container-inactive'
  }

  const renderMenuOptions = () => {
    if (!props.pages) return
    return props.pages.map((page, index) => {
      return (
        <Link className='option-link' to={`/${page}`}>
          <MenuDrawerOption
            key={index}
            page={page}
            setActivePage={props.setActivePage}>
          </MenuDrawerOption>
        </Link>
      )
    })
  }

  return (
    <div className={drawerClass()}>
      <div className='drawer-options-container'>
        {renderMenuOptions()}
      </div>
    </div>
  )

}
