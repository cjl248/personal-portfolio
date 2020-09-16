import React from 'react'
import SocialMediaContainer from '../containers/SocialMediaContainer.jsx'
import MenuButton from './MenuButton.jsx'
import HeaderTitle from './HeaderTitle.jsx'

export default function Header(props) {

  return (
    <div className='app-header'>
      <MenuButton
        toggleMenu={props.toggleMenu}
        menuActive={props.menuActive}>
      </MenuButton>
      <HeaderTitle></HeaderTitle>
      <SocialMediaContainer></SocialMediaContainer>
    </div>
  )

}
