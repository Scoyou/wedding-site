import React from 'react'
import { storiesOf } from '@storybook/react'
import FaqCard from './index'

storiesOf('FaqCard', module).add('FaqCard', () => {
  return (
    <FaqCard
      question="How much wood would a woodchuck chuck if a woodchuck could chuck wood?"
      displayAnswer={true}
    >
      <p>All of it</p>
    </FaqCard>
  )
})
