import React from 'react'
import MenuDrawerContainer from "../containers/MenuDrawerContainer.jsx"

export default function Main(props) {

  console.log('menuActive from Main.jsx', props.menuActive)
  return (
    <div className='app-main'>
      <MenuDrawerContainer
        menuActive={props.menuActive}
        pages={props.pages}>
      </MenuDrawerContainer>
      <div className='app-detail'>{`MAIN`}</div>
    </div>
  )

}
