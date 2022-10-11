import React from 'react'
import { render, screen } from '@testing-library/react'
import FaqCard from './index'

describe('Footer', () => {
  beforeEach(() => {
    render(
      <FaqCard question="Lorem Ipsum" displayAnswer={true}>
        <p>Question Text</p>
      </FaqCard>,
    )
  })

  it('renders', () => {
    expect(screen.getByText(/Lorem Ipsum/)).toBeInTheDocument()
  })

  it('displays question content when displayAnswer is true', () => {
    expect(screen.getByText(/Question Text/)).toBeInTheDocument()
  })
})
