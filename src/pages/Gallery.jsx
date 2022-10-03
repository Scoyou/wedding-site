import React from 'react'
import SectionHeader from '../components/SectionHeader'
import GalleryDisplay from '../components/GalleryDisplay'

const Gallery = () => {
  return (
    <div id="gallery">
      {process.env.NODE_ENV === 'production' ? (
        <SectionHeader title="Coming Soon!" />
      ) : (
        <>
          {' '}
          <SectionHeader title="About Us" />
          <span>content</span>
          <SectionHeader title="Photo Gallery" />
          <GalleryDisplay />
          <h2>Have more images of the wedding you'd like to share?</h2>
          <h3>email them to us at photos@scottandalisia.com</h3>
        </>
      )}
    </div>
  )
}

export default Gallery
