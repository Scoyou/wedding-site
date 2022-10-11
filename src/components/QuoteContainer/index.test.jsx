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

  it('renders engagement picture', () => {
    expect(screen.getByAltText('Engagement')).toBeInTheDocument()
  })
})
