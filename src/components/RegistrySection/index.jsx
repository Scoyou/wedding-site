import React from 'react'
import './index.css'
import SectionHeader from '../SectionHeader'

const RegistrySection = () => {
  return (
    <div id="registry">
      <SectionHeader title="Our Registries" />
      <div className="registry-info top">
        <div className="image-container">
          <h2 className="registry-description">For Our Home</h2>
          <p className="registry-description">Click on the image below to view our wedding registy on Amazon.</p>
          <a
            href={process.env.REACT_APP_REGISTRY_HREF}
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="Alisia's ring"
              className="img"
              src={process.env.PUBLIC_URL + '/ring.webp'}
              loading="lazy"
              width="auto"
              height="600px"
            />{' '}
            <div className="middle">
              <span className="text">Wedding Registry</span>
            </div>
          </a>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h2 className="registry-description">Honeymoon Fund Donations</h2>
        <p className="registry-description">
          Scan or click on either of the QR codes below to donate to our
          honeymoon fund.
        </p>
      </div>
      <div className="registry-info">
        <div className="image-container">
          <a
            href={process.env.REACT_APP_VENMO_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="venmo qr"
              className="img venmo"
              src={process.env.PUBLIC_URL + '/venmo.webp'}
              loading="lazy"
              width="auto"
              height="600px"
            />{' '}
            <div className="middle">
              <span className="text">Scott Venmo</span>
            </div>
          </a>
        </div>
        <div className="image-container">
          <a
            href={process.env.REACT_APP_VENMO_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="venmo qr"
              className="img venmo"
              src={process.env.PUBLIC_URL + '/venmo2.webp'}
              loading="lazy"
              width="auto"
              height="600px"
            />{' '}
            <div className="middle">
              <span className="text">Alisia Venmo</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default RegistrySection
