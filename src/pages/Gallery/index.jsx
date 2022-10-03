import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import GalleryDisplay from '../../components/GalleryDisplay'
import './index.css'

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
          <SectionHeader title="Photo Gallery" />
          <GalleryDisplay images={listOfImages} />
          <div className="more-images-text">
            <p>
              Have images of the wedding you'd like to share?{' '}
              <a href={`mailto:${process.env.REACT_APP_RSVP_EMAIL}`}>
                Email them to us!
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default Gallery
