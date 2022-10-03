import React from 'react'
import './index.css'

const QuoteContainer = () => {
  return (
    <div className="quote-container" data-testid="quote-container">
      <img
        className="quote-image"
        src={process.env.PUBLIC_URL + '/quote-image.png'}
        alt="Shakespeare quote"
      />
      <img
        className="quote-image"
        src={process.env.PUBLIC_URL + '/marry-me-sign.jpeg'}
        alt="Marry me sign"
      />
    </div>
  )
}

export default QuoteContainer
