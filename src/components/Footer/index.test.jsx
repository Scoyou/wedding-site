import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './index'

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('renders', () => {
    expect(screen.getByText(/Email us with any questions/)).toBeInTheDocument()
  })

  it('displays copyright info', () => {
    expect(screen.getByText(/all rights reserved/)).toBeInTheDocument()
  })
})
