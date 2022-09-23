import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../Modal";
import SectionHeader from "../SectionHeader"


import "./index.css";

const RsvpForm = ({ eventDate }) => {
  const form = useRef();

  const [showModal, setShowModal] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    additionalGuests: "",
  });

  const handleNameChange = (event) =>
    setFormState({ ...formState, name: event.target.value });

  const handleEmailChange = (event) =>
    setFormState({ ...formState, email: event.target.value });

  const handleAdditionalGuestsChange = (event) =>
    setFormState({ ...formState, additionalGuests: event.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    //clears the form after sending the email
    e.target.reset();
    setShowModal(true);
  };

  return (
    <div id="rsvp">
      {showModal && <Modal setShowModal={setShowModal} />}
      <SectionHeader title="RSVP" />
      <div className="form-container">
        <form className="rsvp-form" onSubmit={handleSubmit} ref={form}>
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            onChange={handleNameChange}
            required
          />

          <label>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your Email.."
            onChange={handleEmailChange}
          />

          <label>Guests</label>
          <input
            type="text"
            id="guests"
            name="guests"
            placeholder="Let us know who else is coming."
            onChange={handleAdditionalGuestsChange}
          />

          <input
            type="submit"
            value="RSVP"
            disabled={new Date() === eventDate}
          />
        </form>
        <div className="side-info">
          <h3>We hope to see you there!</h3>

          <p className="sub-text">
            We're hoping to make this wedding an enjoyable one for everyone!
            Please let us know if you need special accommodations, or have any
            questions for us!
          </p>
          <h3>East Canyon Resort</h3>
          <h4 className="sub-text">8896 UT-65, Morgan, UT 84050</h4>
        </div>
      </div>
    </div>
  );
};

export default RsvpForm;
