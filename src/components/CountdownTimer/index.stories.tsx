import React from 'react'
import { storiesOf } from '@storybook/react'
import CountdownTimer from './index'

const EVENT_DATE = new Date("October 13, 2023 15:00:00:000")

storiesOf(
  'CountdownTimer',
  module
)
  .add('Countdown Timer', () => {
    return <CountdownTimer targetDate={EVENT_DATE}  />
  })