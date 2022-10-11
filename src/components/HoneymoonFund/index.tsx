import React from 'react'
import './index.css'
import SectionHeader from '../SectionHeader'

const HoneymoonFund = () => {
  return (
    <div style={{ marginTop: '4rem', marginLeft: '3rem', marginRight: '3rem' }}>
      <SectionHeader title="Honeymoon Fund Donations" />
      <div className="honeymoon-fund">
        <p className="description">
          Scan or click on either of the QR codes below to donate to our
          honeymoon fund.
        </p>
        <div className="venmo-info">
          <div>
            <a
              href={process.env.REACT_APP_VENMO_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="venmo qr"
                className="venmo-code"
                src={process.env.PUBLIC_URL + '/venmo.webp'}
                loading="lazy"
                width="600px"
                height="600px"
              />{' '}
              <div className="middle">
                <span className="text">Scott Venmo</span>
              </div>
            </a>
          </div>
          <div>
            <a
              href={process.env.REACT_APP_VENMO_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="venmo qr"
                className="venmo-code"
                src={process.env.PUBLIC_URL + '/venmo2.webp'}
                loading="lazy"
                width="600px"
                height="600px"
              />{' '}
              <div className="middle">
                <span className="text">Alisia Venmo</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HoneymoonFund
