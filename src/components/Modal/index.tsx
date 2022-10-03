import React from "react";
import "./index.css";

export type Props = {
  setShowModal: (boolean) => null
  toEmail: string
}

const Modal = (props: Props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={() => props.setShowModal(false)}>
          X
        </button>
        <div className="modal-inner">
          <h1>Thank you for your RSVP!</h1>
          <span>A confirmation email has been sent to {props.toEmail}</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
