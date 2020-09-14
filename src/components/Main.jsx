import React from 'react'

export default function Main(props) {

  const renderMenuDrawer = () => {
    console.log(props.menuActive)
  }

  return (
    <div className="app-main">
      <div>{renderMenuDrawer()}</div>
      <p>{`MAIN`}</p>
    </div>
  )

}
