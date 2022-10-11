import React from 'react'
import { render, screen } from '@testing-library/react'
import HoneymoonFund from './index'

describe('HoneymoonFund', () => {
  beforeEach(() => {
    render(<HoneymoonFund />)
  })

  it('renders', () => {
    expect(screen.getByText(/Honeymoon Fund Donations/)).toBeInTheDocument()
  })

  it('renders both venmo codes', () => {
    expect(screen.getByAltText('scott venmo qr')).toBeInTheDocument()
    expect(screen.getByAltText('alisia venmo qr')).toBeInTheDocument()
  })
})
