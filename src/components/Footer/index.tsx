import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <div className="footer">
      <p>Email us with any questions at {process.env.REACT_APP_RSVP_EMAIL}</p>
      <br />
      <p className="copyright">
        &copy; Scott Young 2022, all rights reserved. <br />
        All images used on scottandalisia.com are the property of either
        scottandalisia.com or{' '}
        <a href="https://www.facebook.com/shennilleshereephotography">
          Shennile Sheree Photography
        </a>{' '}
        and cannot be used, modified, reproduced, or redistributed without the
        permission of the owner or owners. <br />{' '}
        <a href="https://www.disclaimergenerator.net/live.php?token=yrpUXeppTejFL1SCohsclNI1edbHZaDK">
          Disclaimer for scottandalisia.com
        </a>
      </p>{' '}
    </div>
  )
}

export default Footer
