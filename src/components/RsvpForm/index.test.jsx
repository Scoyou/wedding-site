import { render, screen } from '@testing-library/react'
import RsvpForm from './index.jsx'

describe('RSVP form', () => {
  beforeEach(() => {
    render(<RsvpForm eventDate={new Date('October 13, 2023 15:00:00:000')} />)
  })

  it('renders', () => {
    expect(screen.getByRole('heading', { name: 'RSVP' })).toBeInTheDocument()
  })

  describe('fields', () => {
    it('renders name field', () => {
      expect(screen.getByLabelText('Name*')).toBeInTheDocument()
    })
    it('renders email field', () => {
      expect(screen.getByLabelText('Email*')).toBeInTheDocument()
    })
    it('renders guests field', () => {
      expect(screen.getByLabelText('Guests')).toBeInTheDocument()
    })
  })

  describe('submit button', () => {
    it('renders a button', () => {
      expect(screen.getByRole('button', { name: 'RSVP' })).toBeInTheDocument()
    })
  })

  describe('side info', () => {
    it('renders', () => {
      expect(
        screen.getByRole('heading', { name: 'We hope to see you there!' }),
      ).toBeInTheDocument()
    })
  })
})
