import React, {useState, useEffect} from 'react'
import HamburgerMenu from 'react-hamburger-menu'


//change to class component to keep track of menu status
// OR save state in app and pass down set f and state to this component
export default function MenuButton(props) {

  const [menu, setMenu] = useState(false)

  const handleMenuClick = () => {
    setMenu(!menu)
  }

  useEffect(()=> {
    props.toggleMenu(menu)
  })

  return (
    <div className="menu-button">
      <HamburgerMenu
        isOpen={menu}
	      menuClicked={handleMenuClick}
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
