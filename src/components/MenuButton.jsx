// import React, {useState, useEffect} from 'react'
import React from 'react'
import HamburgerMenu from 'react-hamburger-menu'


//change to class component to keep track of menu status
// OR save state in app and pass down set f and state to this component
export default class MenuButton extends React.Component {

  state = {
    menuActive: false,
  }

  handleMenuClick = () => {
    this.setState({
      menuActive: !this.state.menuActive
    }, () => {
      this.props.toggleMenu(this.state.menuActive)
    })
  }

  render() {
    return (
      <div className="menu-button">
        <HamburgerMenu
          isOpen={this.state.menuActive}
  	      menuClicked={this.handleMenuClick}
  	      width={36}
  	      height={30}
          strokeWidth={4}
  	      color='#E2E8DD'
  	      borderRadius={5}
  	      animationDuration={0.5}>
        </HamburgerMenu>
      </div>
    )
  }


}
