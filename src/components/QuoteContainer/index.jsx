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
        className="quote-image marry-me"
        src={process.env.PUBLIC_URL + '/DSC_0199.jpg'}
        alt="Marry me sign"
      />
    </div>
  )
}

export default QuoteContainer
