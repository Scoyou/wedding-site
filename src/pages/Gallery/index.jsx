import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import GalleryDisplay from '../../components/GalleryDisplay'

// Exports to use in GalleryDisplay story
export const importImages = (r) => {
  return r.keys().map(r)
}

export const listOfImages = importImages(
  require.context('./images/', false, /\.(png|jpe?g|svg)$/),
)

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
          <SectionHeader title="Photo Gallery" />p
          <GalleryDisplay images={listOfImages} />
          <h2>Have more images of the wedding you'd like to share?</h2>
          <h3>
            <a href={`mailto:${process.env.REACT_APP_RSVP_EMAIL}`}>
              Email them to us!
            </a>
          </h3>
        </>
      )}
    </div>
  )
}

export default Gallery
