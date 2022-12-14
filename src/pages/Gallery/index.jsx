import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import GalleryDisplay from '../../components/GalleryDisplay'
import './index.css'

// Exports to use in GalleryDisplay story
export const importImages = (r) => {
  return r.keys().map(r)
}

export const listOfImages = importImages(
  require.context('./images/', false, /\.(png|jpe?g|svg|webp)$/),
)

const Gallery = () => {
  return (
    <div id="gallery">
      <SectionHeader title="Photo Gallery" />
      <GalleryDisplay images={listOfImages} />
      <div className="more-images-text">
        <span className="photo-credit">
          Photo Credit: Shennile Sheree Photography{' '}
        </span>
        <span>
          <a href="https://www.facebook.com/shennilleshereephotography">
            <img
              src={process.env.PUBLIC_URL + '/facebooklogo.png'}
              alt="facebook logo"
              height="25"
              width="25"
              className="logo-image"
              loading="lazy"
            />
          </a>
          <a href="https://www.instagram.com/shennille_sheree_photography/">
            <img
              src={process.env.PUBLIC_URL + '/instagramlogo.png'}
              alt="instagram logo"
              height="25"
              width="25"
              className="logo-image"
              loading="lazy"
            />
          </a>
        </span>
        <p>
          Have images of the wedding party you'd like to share?{' '}
          <a href={`mailto:${process.env.REACT_APP_RSVP_EMAIL}`}>
            Email them to us!
          </a>
        </p>
      </div>
    </div>
  )
}

export default Gallery
