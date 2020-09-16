import React from 'react'
import HamburgerMenu from 'react-hamburger-menu'

export default class MenuButton extends React.Component {

  handleMenuButtonClick = () => {
    this.props.toggleMenu(this.props.menuActive)
  }

  render() {
    return (
      <div className='menu-button'>
        <HamburgerMenu
          isOpen={this.props.menuActive}
  	      menuClicked={this.handleMenuButtonClick}
  	      width={36}
  	      height={30}
          rotate={0}
          strokeWidth={4}
  	      color='#E2E8DD'
  	      borderRadius={5}
  	      animationDuration={0.5}>
        </HamburgerMenu>
      </div>
    )
  }

}
