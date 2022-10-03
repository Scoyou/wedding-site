import React from 'react'
import DateTimeDisplay from './DateTimeDisplay'
import { useCountdown } from '../../hooks/useCountdown'
import './index.css'

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <p>Thanks for coming!</p>
    </div>
  )
}

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <div className="show-counter">
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </div>
    </div>
  )
}

const CountdownTimer = ({ targetDate, title, content }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />
  } else {
    return (
      <div className="countdown-container">
        <div className="content">
          <h1 className="countdown-title">{title}</h1>
          <span>{content}</span>
          <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </div>
      </div>
    )
  }
}

export default CountdownTimer
