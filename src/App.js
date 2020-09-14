import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

export default class App extends React.Component {

  state = {
    menuActive: false,
  }

  toggleMenu = (active) => {
    console.log(active)
  }

  render() {
    return (
      <div className="app">
        <Header toggleMenu={this.toggleMenu}></Header>
        <Main menuActive={this.state.menuActive}></Main>
      </div>
    )
  }

}
