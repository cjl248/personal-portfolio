import React from 'react'

export default class Resume extends React.Component {

  state = {
    text: ""
  }

  handleTyping = (e) => {
    let text = e.target.value
    this.setState({
      text
    })
  }

  render() {
    return(
      <div className='about-container'>
        <section className='about-header'>
          <span>{`ABOUT`}</span>
          <span>{`Chris Liendo`}</span>
        </section>
        <section className='about-main'>
          <p>{`Chris Liendo is a Fullstack Software Engineer and recent graduate of Flatiron School in  New York, NY. He holds an undergraduate degree in Information Science and Economics from Cornell University. `}</p>
          <p>{`He loves to ski and snowboard in the winter, kayak and hike in the summer and play soccer and tennis year round.`}</p>
          <p>{`If you'd like to get in contact, you can use the form below or email him directly at cjl248 "at" cornell "dot" edu `}</p>
        </section>
        <section className='about-form-wrapper'>
          <form className='about-form'>
            <label className='about-label'>{`Message: `}</label>
            <textarea
              onChange={this.handleTyping}
              className='about-text'
              rows='5'
              cols='50'>
              {this.state.text}
            </textarea>
            <button className='about-button'>{`SUBMIT`}</button>
          </form>
        </section>
      </div>
    )
  }
}
