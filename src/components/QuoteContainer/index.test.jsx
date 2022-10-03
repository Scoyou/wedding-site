import { render, screen } from '@testing-library/react'
import QuoteContainer from './index.jsx'

describe('quote container', () => {
  beforeEach(() => {
    render(<QuoteContainer />)
  })

  it('renders', () => {
    expect(screen.getByTestId('quote-container')).toBeInTheDocument()
  })
})
