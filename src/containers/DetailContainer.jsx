import React from 'react'

export default function DetailContainer(props) {

  return (
    <div className='detail-container'>
      <span>{`active page: ${props.activePage.toUpperCase()}`}</span>
    </div>
  )

}
