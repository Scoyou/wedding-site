import React, { useState, useRef } from 'react'
import Modal from '../Modal'
import SectionHeader from '../SectionHeader'
import { sendForm, sendConfirmation } from '../../services/emailJsService'
import isEmail from 'validator/lib/isEmail'
import './index.css'

const RsvpForm = ({ eventDate }) => {
  const form = useRef()

  const [emailError, setEmailError] = useState('')
  const [showModal, setShowModal] = useState(false)

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    additionalGuests: '',
    notes: '',
  })

  const handleNameChange = (event) =>
    setFormState({ ...formState, name: event.target.value })

  const handleEmailChange = (event) =>
    setFormState({ ...formState, email: event.target.value })

  const handleAdditionalGuestsChange = (event) =>
    setFormState({ ...formState, additionalGuests: event.target.value })

  const handleNotesChange = (event) =>
    setFormState({ ...formState, notes: event.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isEmail(formState.email)) {
      let templateParams = {
        to_name: formState.name,
        to_email: formState.email,
      }

      sendForm(form.current)
      sendConfirmation(templateParams)

      //clears the form after sending the email
      e.target.reset()
      setShowModal(true)
    } else {
      setEmailError('Please enter a valid email address')
    }
  }
  return (
    <div id="rsvp">
      {showModal && (
        <Modal setShowModal={setShowModal} toEmail={formState.email} />
      )}
      <SectionHeader title="RSVP" />
      <div className="form-container">
        <form className="rsvp-form" onSubmit={handleSubmit} ref={form}>
          <div className="float-field">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleNameChange}
              required
            />
          </div>

          <div className="float-field">
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleEmailChange}
              required
            />
          </div>
          {emailError && <span className="email-error">{emailError}</span>}

          <div className="float-field">
            <label htmlFor="guests">Guests</label>
            <input
              type="text"
              id="guests"
              name="guests"
              onChange={handleAdditionalGuestsChange}
            />
          </div>

          <div className="float-field">
            <textarea
              rows="8"
              type="text"
              id="notes"
              name="notes"
              placeholder="Additional Notes (optional)"
              onChange={handleNotesChange}
            />
          </div>

          <input
            type="submit"
            value="SUBMIT"
            disabled={new Date() > eventDate}
          />
        </form>
        <div className="side-info">
          <h3>We hope to see you there!</h3>

          <p className="sub-text">
            We're hoping to make this wedding an enjoyable one for everyone!
            Please let us know if you need special accommodations or have any
            dietary restrictions in the additional notes section of the form.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RsvpForm
