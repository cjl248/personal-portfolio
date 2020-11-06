import React from 'react'

export default class About extends React.Component {

  state = {
    name: "",
    email: "",
    subject: "",
    text: ""
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.setState({
      name: "",
      email: "",
      subject: "",
      text: ""
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
          <p>{`You can find more information and download a copy of an updated Resume on the...resume page! Or if you'd like to get in contact, you can use the form below!`}</p>
        </section>
        <section className='about-form-wrapper'>
          <form className='about-form'>
            <label className='contact-label'>{`CONTACT CHRIS: `}</label>
            <span className='name-group'>
              <label className='name-label'>{`Name: `}</label>
              <input
                required
                name='name'
                value={this.state.name}
                onChange={this.handleInput}
                className='name-input'
                type='text'
                autoComplete="chrome-off">
              </input>
            </span>
            <span className='email-group'>
              <label
                name='email'
                className='email-label'
                type='text'>
                {`Email: `}
              </label>
              <input
                name='email'
                value={this.state.email}
                onChange={this.handleInput}
                className='email-input'
                type='text'
                autoComplete="chrome-off">
              </input>
            </span>
            <span className='subject-group'>
              <label
                className='subject-label'
                type='text'>
                {`Subject: `}
              </label>
              <input
                name='subject'
                value={this.state.subject}
                onChange={this.handleInput}
                className='subject-input'
                type='text'
                autoComplete="chrome-off">
              </input>
            </span>
            <textarea
              name="text"
              onChange={this.handleInput}
              className='about-text'
              value={this.state.text}
              rows='6'
              cols='40'
              placeholder="message...">
            </textarea>
            <button
              className='about-button'
              onClick={this.handleSubmit}>
              {`SUBMIT`}
            </button>
          </form>
        </section>
      </div>
    )
  }
}
