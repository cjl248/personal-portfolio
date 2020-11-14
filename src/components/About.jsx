import React from 'react'

const apiURL = "https://personal-portfolio-mailer.herokuapp.com/"

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

  handleSubmit = async (e) => {
    e.preventDefault()
    const config = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        text: this.state.text,
      })
    }
    const response = await fetch(`${apiURL}/form_mail`, config)
    const responseData = await response.json()
    if (responseData.status === 202) {
      alert("Message sent successfully!")
      this.setState({
        name: "",
        email: "",
        subject: "",
        text: ""
      })
    } else if (responseData.status === 422) {
      alert("422: Unprocessable Entity...response data in the console log.")
    } else {
      alert("500: Server Error")
    }
  }

  render() {
    return(
      <div className='about-container'>
        <section className='about-header'>
          <span>{`ABOUT`}</span>
          <span>{`Chris Liendo`}</span>
        </section>
        <section className='about-main'>
          <p>{`Hi, my name is Chris Liendo! I'm a Full Stack Software Engineer, experienced in Ruby, Rails, Python, Java, JavaScript, React and Redux with a dual B.A. in Information Science and Economics.`}</p>

          <p>{`I discovered web development as an undergrad but truly became passionate about it while working as a technical recruiter. Many personal projects and technical meetups later, I committed to a career change. As a recent graduate of Flatiron School’s Software Engineering Immersive, I am currently fully focused on launching my career as a full stack web developer.`}</p>

          <p>{`I love to ski and snowboard in the winter, kayak and hike in the summer and play soccer and tennis year round.`}</p>

          <p>{`You can find more information and download a copy of an updated resume on the resume page! Or if you'd like to get in contact, you can use the form below!`}</p>
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
