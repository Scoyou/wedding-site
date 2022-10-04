import React from 'react'
import './index.css'

type Props = {
  images: string[]
}

const GalleryDisplay = (props: Props) => {
  return (
    <div className="gallery-display">
      {props.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="scott and alisia engagement"
          className="gallery-image"
          loading="lazy"
          width="100%"
          height="auto"
        />
      ))}
    </div>
  )
}

export default GalleryDisplay
