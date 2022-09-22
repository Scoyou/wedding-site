import React from 'react';
import './index.css'

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={() => setShowModal(false)}>X</button>
        <div className="modal-inner">
          <span>Thank You for RSVPing!</span>
        </div>
      </div>
    </div>
  )
}

export default Modal