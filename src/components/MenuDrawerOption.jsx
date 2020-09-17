import React from 'react'

export default function MenuDrawerOption(props) {

  const formatPageName = () => {
    return props.page[0].toUpperCase()+props.page.slice(1)
  }

  return(
    <div className='menu-drawer-option'>
      {formatPageName()}
    </div>
  )
}
