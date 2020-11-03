import React from 'react'
import MenuDrawerContainer from "../containers/MenuDrawerContainer.jsx"
import DetailContainer from '../containers/DetailContainer.jsx'

export default function Main(props) {

  // console.log('menuActive from Main.jsx', props.menuActive)
  return (
    <div className='app-main'>
      {/*<MenuDrawerContainer
        menuActive={props.menuActive}
        setActivePage={props.setActivePage}
        pages={props.pages}>
      </MenuDrawerContainer>*/}
      <DetailContainer
        activePage={props.activePage}>
      </DetailContainer>
    </div>
  )

}
