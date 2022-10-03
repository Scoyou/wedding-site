import { render, screen } from '@testing-library/react'
import QuoteContainer from './index.jsx'

describe('quote container', () => {
  beforeEach(() => {
    render(<QuoteContainer />)
  })

  it('renders', () => {
    expect(screen.getByTestId('quote-container')).toBeInTheDocument()
  })

  it('renders quote', () => {
    expect(screen.getByAltText('Shakespeare quote')).toBeInTheDocument()
  })

  it('renders marry me sign picture', () => {
    expect(screen.getByAltText('Marry me sign')).toBeInTheDocument()
  })
})
