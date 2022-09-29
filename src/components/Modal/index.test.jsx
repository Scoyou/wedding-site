import {render, screen} from '@testing-library/react'
import Modal from "./index.jsx"

const defaults = {
  setShowModal: true,
  toEmail: 'test@example.com',
}


describe('countdown timer', () => {
  beforeEach(() => {
    render(<Modal {...defaults} />)
  })

  it('renders', () => {
    expect(
      screen.getByRole('heading', {name: "Thank you for your RSVP!"})
    ).toBeInTheDocument()
  })

  it('shows correct email', () => {
    expect(
      screen.getByText(/test@example.com/)
    ).toBeInTheDocument()
  })
})
