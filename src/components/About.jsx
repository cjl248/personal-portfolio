import React from 'react'

const apiURL = "https://personal-portfolio-mailer.herokuapp.com/"

export default class About extends React.Component {

  state = {
    name: "",
    email: "",
    subject: "",
    text: "",
    formMessage: "",
    isSending: false
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      formMessage: "",
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({
      formMessage: "Sending your message...",
      isSending: true
    })
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

    if (this.state.name !== "") { // START => check name !empty
      const response = await fetch(`${apiURL}/form_mail`, config)
      const responseData = await response.json()
      if (responseData.status === 202) {
        // alert("Message sent successfully!")
        this.setState({
          name: "",
          email: "",
          subject: "",
          text: "",
          formMessage: "Message sent successfully!",
          isSending: false
        })
      } else if (responseData.status === 422) {
        alert("422: your message could not be sent")
      } else {
        alert("500: Server Error")
      }
    } else { // END => check name !empty
      this.setState({
        formMessage: "Name is required!",
        isSending: false
      })
    }

  }

  loadingClasses = () => {
    if (this.state.isSending) return 'about-message-loading'
    else return 'not-loading'
  }

  renderMessages = () => {
    if (!this.state.formMessage) return
    return (

      <div className='about-form-message'>
        {this.state.formMessage}
        <img
          className={this.loadingClasses()}
          src={require("../assets/loading.gif")}
          alt={`sending message...`}
          width={20}
          height={20}>
        </img>
      </div>
    )
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

          <p>{`Pastimes include skiing and snowboarding in the winter, kayaking and hiking in the summer and playing soccer and tennis year round. Other interests include the crossroads of meditation, mindfulness, psychology, neurology and spirituality. Some of my favorite authors are Ken Wilber, Alan Watts, Eckhart Tolle, and Daniel J. Siegel.`}</p>

          <p>{`You can find more information and download a copy of an updated resume on the resume page! Or if you'd like to get in contact, you can use the form below!`}</p>
        </section>
        <section className='about-form-wrapper'>
          <form className='about-form'>
            <label className='contact-label'>{`CONTACT CHRIS: `}</label>
            {this.renderMessages()}
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
