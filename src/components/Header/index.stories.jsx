import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './index'

const EVENT_DATE = new Date('October 13, 2023 15:00:00:000')

storiesOf('Header', module).add('Header', () => {
  return (
    <Header
      intro="Come celebrate the union of:"
      title="Scott Young & Alisia Harry"
      subTitle={EVENT_DATE.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
      content={
        new Date() !== EVENT_DATE && (
          <button
            className="rsvp-button"
            onClick={() => window.location.replace('/#rsvp')}
          >
            RSVP
          </button>
        )
      }
    />
  )
})
