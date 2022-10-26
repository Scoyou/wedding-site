import { render, screen } from '@testing-library/react'
import Modal from './index'

const defaults = {
  setShowModal: true,
  toEmail: 'test@notanemail.com',
}

describe('countdown timer', () => {
  beforeEach(() => {
    render(<Modal {...defaults} />)
  })

  it('renders', () => {
    expect(
      screen.getByRole('heading', { name: 'Thank you for your RSVP!' }),
    ).toBeInTheDocument()
  })

  it('shows correct email', () => {
    expect(
      screen.getByText(
        `A confirmation email has been sent to ${defaults.toEmail}`,
      ),
    ).toBeInTheDocument()
  })
})
