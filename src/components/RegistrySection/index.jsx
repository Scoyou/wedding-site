import React from 'react'
import './index.css'
import SectionHeader from '../SectionHeader'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const RegistrySection = () => {
  const { width } = useWindowDimensions()

  return (
    <div id="registry">
      <SectionHeader title="Our Registry" />
      <div className="image-container">
        <a
          href={process.env.REACT_APP_REGISTRY_HREF}
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="Alisia's ring"
            className="img"
            src={process.env.PUBLIC_URL + '/ring.webp'}
          />{' '}
          <div className="middle">
            <span className="text">View Registry</span>
          </div>
        </a>
        {width < 600 && (
          <span className="small-screen-text">
            Click the image above to view our registry.
          </span>
        )}
      </div>
    </div>
  )
}

export default RegistrySection
