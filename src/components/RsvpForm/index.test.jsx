import {render, screen} from '@testing-library/react'
import RsvpForm from "./index.jsx"


describe('RSVP form', () => {
  beforeEach(() => {
    render(<RsvpForm />)
  })

  it('renders', () => {
    expect(
      screen.getByRole("heading", {name: "RSVP"})
    ).toBeInTheDocument()
  })

  describe('fields', () => {
    it('renders name field', () => {
      expect(
        screen.getByLabelText("Name*")
      ).toBeInTheDocument()
    })
    it('renders email field', () => {
      expect(
        screen.getByLabelText("Email*")
      ).toBeInTheDocument()
    })
    it('renders guests field', () => {
      expect(
        screen.getByLabelText("Guests")
      ).toBeInTheDocument()
    })
  })

  describe('side info', () => {
    it('renders', () => {
      expect(
        screen.getByRole("heading", {name: "We hope to see you there!"})
      ).toBeInTheDocument()
    })
  })
})
