import React, { useState } from "react";
import "./index.css";

const RsvpForm = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };
  return (
    <div>
      <span className="rsvp-header"><h1>RSVP</h1></span>
      <div className="form-container">
        <div className="rsvp-form">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            onChange={handleNameChange}
          />

          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your Email.."
            onChange={handleEmailChange}
          />

          <label for="guests">Guests</label>
          <input
            type="text"
            id="guests"
            name="guests"
            placeholder="Let us know who else is coming."
            onChange={handleAdditionalGuestsChange}
          />

          <input type="submit" value="RSVP" onClick={handleSubmit} />
        </div>
        <div className="side-info">
          <span>We hope to see you there!</span>
          <h2>East Canyon Resort</h2>
          <h3>8896 UT-65, Morgan, UT 84050</h3>
        </div>
      </div>
    </div>
  );
};

export default RsvpForm;
