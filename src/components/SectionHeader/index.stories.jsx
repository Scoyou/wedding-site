import React from 'react'
import { storiesOf } from '@storybook/react'
import SectionHeader from './index'
import '../../index.css'

storiesOf(
  'SectionHeader',
  module
)
  .add('Section Header', () => {
    return <SectionHeader title="Section Header"/>
  })