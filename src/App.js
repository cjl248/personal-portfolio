import React from 'react'
import './App.scss'
import Header from './components/Header.jsx'
import FooterContainer from './containers/FooterContainer.jsx'
import Main from './components/Main.jsx'
import MenuDrawerContainer from './containers/MenuDrawerContainer.jsx'

export default class App extends React.Component {

  state = {
    menuActive: false,
    pages: ['resume', 'projects', 'experience', 'about'],
    activePage: 'resume',
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
    }, () => {
      window.scroll(0,0)
    })
  }

  render() {
    return (
      <div className='app'>
        <Header
          toggleMenu={this.toggleMenu}
          menuActive={this.state.menuActive}>
        </Header>
        <MenuDrawerContainer
          menuActive={this.state.menuActive}
          setActivePage={this.setActivePage}
          pages={this.state.pages}>
        </MenuDrawerContainer>
        <Main
          menuActive={this.state.menuActive}
          pages={this.state.pages}
          setActivePage={this.setActivePage}
          activePage={this.state.activePage}>
        </Main>
        <FooterContainer></FooterContainer>
      </div>
    )
  }
}
