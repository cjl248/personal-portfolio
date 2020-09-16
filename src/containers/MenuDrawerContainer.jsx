import React from 'react'
import MenuDrawerOption from '../components/MenuDrawerOption.jsx'

export default function MenuDrawerContainer(props) {

  const drawerClass = () => {
    return props.menuActive ? 'menu-drawer-container-active' : 'menu-drawer-container-inactive'
  }

  const renderMenuOptions = () => {
    return props.pages.map((page) => {
      return (<MenuDrawerOption page={page}></MenuDrawerOption>)
    })
  }

  return (
    <div className={drawerClass()}>
      {renderMenuOptions()}
    </div>
  )

}
