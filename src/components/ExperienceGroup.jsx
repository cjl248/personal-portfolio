import React from 'react'

export default class ExperienceGroup extends React.Component {

  state = {
    bulletsActive: false
  }


  renderExperience = () => {
    if (this.props.experience.experience) {
      return this.props.experience.experience.map((sentence, index) => {
        return ( <li key={index}>{sentence}</li> )
      })
    }
  }

  toggleExperience = () => {
    this.setState({
      bulletsActive: !this.state.bulletsActive
    })
  }

  toggleBulletStyling = () => {
    return this.state.bulletsActive ? 'exp-bullets-active': 'exp-bullets-inactive'
  }

  toggleBlockStyling = () => {
    return  this.state.bulletsActive ? 'hover-block active-hover-block' : 'hover-block'
  }

  render () {
    const {name, position, start, end, experience} = this.props.experience
    return (
      <div className='hover-wrapper'>
        <div className={this.toggleBlockStyling()}></div>
        <div
          className='exp-project-group'
          onClick={this.toggleExperience}>
            <section className ='exp-line-1'>
              <span>{name}</span>
              <span>{`${start} - ${end}`}</span>
            </section>
            <section className ='exp-line-2'>
              {position}
            </section>
            <section className ={this.toggleBulletStyling()}>
              <ul>{this.renderExperience()}</ul>
            </section>
        </div>
      </div>
    )
  }
}
