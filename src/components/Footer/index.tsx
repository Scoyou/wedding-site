import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <div className="footer">
      <p>Contact us with any questions at {process.env.REACT_APP_RSVP_EMAIL}</p>
    </div>
  )
}

export default Footer
