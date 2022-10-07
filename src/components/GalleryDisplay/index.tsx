import React from 'react'
import './index.css'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary, CloudinaryImage} from "@cloudinary/url-gen"; 


type imageResource = {
  assetId: string
  bytes : number
  createdAt: string
  folder: string
  format: string
  height: number
  publicId: CloudinaryImage
  resourceType: string
  secureUrl: string
  type: string
  url: string
  version: number
  width: number
}

type Props = {
  images: imageResource[]
}

const GalleryDisplay = (props: Props) => {

  return (
    <div className="gallery-display">
      {props.images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt="scott and alisia engagement"
          className="gallery-image"
          loading={index === 0 || index === 1 ? 'eager' : 'lazy'}
          width="500"
          height="500"
        />
      ))}
    </div>
  )
}

export default GalleryDisplay
