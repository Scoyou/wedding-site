import React from 'react'
import { storiesOf } from '@storybook/react'
import GalleryDisplay from './index'
import { listOfImages } from '../../pages/Gallery'

storiesOf('GalleryDisplay', module).add('GalleryDisplay', () => {
  return <GalleryDisplay images={listOfImages} />
})
