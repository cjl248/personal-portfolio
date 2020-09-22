import React from 'react'
import './App.scss'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

export default class App extends React.Component {

  state = {
    menuActive: false,
    pages: ['resume', 'projects', 'experience', 'about'],
    activePage: 'projects',
  }

  toggleMenu = (active) => {
    this.setState({
      menuActive: !active,
    })
  }

  setActivePage = (page) => {
    this.setState({
      activePage: page,
      menuActive: false,
    })
  }

  render() {
    return (
      <div className='app'>
        <Header
          toggleMenu={this.toggleMenu}
          menuActive={this.state.menuActive}>
        </Header>
        <Main
          menuActive={this.state.menuActive}
          pages={this.state.pages}
          setActivePage={this.setActivePage}
          activePage={this.state.activePage}>
        </Main>
      </div>
    )
  }

}
