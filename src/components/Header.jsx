import React from 'react';
import CountdownTimer from './CountdownTimer'

const Header = () => {
  const EVENT_DATE = new Date("October 13, 2023 15:00:00:000")

  return(
    <div className="header">
      <div className="center">
        <h1 className="title">Save The Date!</h1>
        <h2 className="subtitle">Friday, October 13th 2023</h2>

        <CountdownTimer targetDate={EVENT_DATE} />
      </div>
    </div>
  )
}

export default Header