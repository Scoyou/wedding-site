import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <div className="footer">
      <p>Email us with any questions at {process.env.REACT_APP_RSVP_EMAIL}</p>
      <br />
      <p className="copyright">
        Copyright Scott Young &copy; 2022, all rights reserved. <br />
        All images used on scottandalisia.com are the property of either
        scottandalisia.com or{' '}
        <a
          style={{ color: 'white' }}
          href="https://www.facebook.com/shennilleshereephotography"
        >
          Shennile Sheree Photography
        </a>{' '}
        and cannot be used, modified, reproduced, or redistributed without the
        express permission of the owner or owners.
      </p>
    </div>
  )
}

export default Footer
