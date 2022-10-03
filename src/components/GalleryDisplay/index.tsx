import React from 'react'
import './index.css'

type Props = {
  images: string[]
}

const GalleryDisplay = (props: Props) => {
  console.log(props.images)
  return (
    <div className="gallery-display">
      {props.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="scott and alisia engagement"
          className="gallery-image"
        />
      ))}
    </div>
  )
}

export default GalleryDisplay
