import React from 'react'
import { storiesOf } from '@storybook/react'
import RsvpForm from './index'

storiesOf('RsvpForm', module).add('RsvpForm', () => {
  return <RsvpForm eventDate={new Date('October 13, 2023 15:00:00:000')} />
})
