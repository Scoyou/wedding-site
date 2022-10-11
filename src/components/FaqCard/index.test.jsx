import React from 'react'
import { render, screen } from '@testing-library/react'
import FaqCard from './index'

describe('Footer', () => {
  const defaults = {
    question: 'Lorem Ipsum Dolar?',
    displayAnswer: true,
  }
  beforeEach(() => {
    render(
      <FaqCard {...defaults}>
        <p>Question Text</p>
      </FaqCard>,
    )
  })

  it('renders', () => {
    expect(
      screen.getByRole('heading', { name: /Lorem Ipsum Dolar?/ }),
    ).toBeInTheDocument()
  })

  it('displays question content when displayAnswer is true', () => {
    expect(screen.getByText(/Question Text/)).toBeInTheDocument()
  })
})
