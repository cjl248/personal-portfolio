import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function SocialMediaContainer() {

  return (
    <div className="social-media-container">
      <SocialIcon
        target="_blank"
        url="https://linkedin.com/in/chris-liendo/"
        bgColor="#E2E8DD"
        className="social-icon" />
      <SocialIcon
        target="_blank"
        url="https://github.com/cjl248"
        bgColor="#E2E8DD"
        className="social-icon" />
      <SocialIcon
        target="_blank"
        url="https://medium.com/@chrisliendo"
        bgColor="#E2E8DD"
        className="social-icon" />
    </div>
  )

}
