import React, { useState, useEffect } from 'react'
import SectionHeader from '../../components/SectionHeader'
import GalleryDisplay from '../../components/GalleryDisplay'
import './index.css'
import axios from 'axios'

const Gallery = () => {
  const EVENT_DATE = new Date(process.env.REACT_APP_EVENT_DATE)
  const [images, setImages] = useState([])

  useEffect(() => {
    axios({
      url: 'https://api.cloudinary.com/v1_1/dd73hevmu/resources/image',
      method: 'get',
      headers: {
        Authorization: 'Basic' + ' ' + process.env.REACT_APP_CLOUDINARY_TOKEN,
      },
    }).then((res) => setImages(res.data))
  }, [])

  console.log(images)
  return (
    <div id="gallery">
      <SectionHeader title="Photo Gallery" />
      {images && <GalleryDisplay images={images} />}
      <div className="more-images-text">
        <span style={{ float: 'right' }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/media/set/?vanity=shennilleshereephotography&set=a.601797878060514"
          >
            View full album
          </a>
        </span>
        <span className="photo-credit">
          Photo Credit: Shennile Sheree Photography{' '}
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
        {new Date() > EVENT_DATE && (
          <p>
            Have images of the wedding you'd like to share?{' '}
            <a href={`mailto:${process.env.REACT_APP_RSVP_EMAIL}`}>
              Email them to us!
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

export default Gallery
