import React, { ReactNode } from 'react'
import DateTimeDisplay from './DateTimeDisplay'
import { useCountdown } from '../../hooks/useCountdown'
import './index.css'

export type CountdownProps = {
  title: ReactNode
  content: ReactNode
  targetDate: Date | null
}

type ShowCounterProps = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <p>Thanks for coming!</p>
    </div>
  )
}

const ShowCounter = (props: ShowCounterProps) => {
  return (
    <div>
      <div className="show-counter">
        <DateTimeDisplay
          value={props.days}
          type={'Days'}
          isDanger={props.days <= 3}
        />
        <p>:</p>
        <DateTimeDisplay value={props.hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={props.minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay
          value={props.seconds}
          type={'Seconds'}
          isDanger={false}
        />
      </div>
    </div>
  )
}

const CountdownTimer = (props: CountdownProps) => {
  const [days, hours, minutes, seconds] = useCountdown(props.targetDate)

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />
  } else {
    return (
      <div className="countdown-container">
        <div className="content">
          <h1 className="countdown-title">{props.title}</h1>
          <span>{props.content}</span>
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
