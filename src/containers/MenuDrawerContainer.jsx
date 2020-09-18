import React from 'react'
import MenuDrawerOption from '../components/MenuDrawerOption.jsx'

export default function MenuDrawerContainer(props) {

  const drawerClass = () => {
    return props.menuActive ? 'menu-drawer-container-active' : 'menu-drawer-container-inactive'
  }

  const renderMenuOptions = () => {
    return props.pages.map((page, index) => {
      return (
        <MenuDrawerOption
          key={index}
          page={page}
          setActivePage={props.setActivePage}>
        </MenuDrawerOption>)
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
