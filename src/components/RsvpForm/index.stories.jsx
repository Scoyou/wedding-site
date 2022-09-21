import React from 'react'
import { storiesOf } from '@storybook/react'
import RsvpForm from './index'

storiesOf(
  'RsvpForm',
  module
)
  .add('RSVP Form', () => {
    return <RsvpForm />
  })