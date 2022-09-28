import React from "react";
import "./index.css";

const Modal = ({ setShowModal, toEmail }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={() => setShowModal(false)}>
          X
        </button>
        <div className="modal-inner">
          <h1>Thank you for your RSVP!</h1>
          <span>A confirmation email has been sent to {toEmail}</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
