import React from 'react'
import DetailContainer from '../containers/DetailContainer.jsx'

export default function Main(props) {

  return (
    <div className='app-main'>
      <DetailContainer
        setActivePage={props.setActivePage}
        activePage={props.activePage}>
      </DetailContainer>
    </div>
  )

}
