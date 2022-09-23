import React from 'react';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

const Gallery = () => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dd73hevmu'
    }
  });

  const myImage = cld.image('cld-sample'); 
  
  return(
    <div id="gallery">
       <AdvancedImage cldImg={myImage} />
    </div>
  )
}

export default Gallery