import React from "react";
import './index.css'

const Header = ({ eventDate }) => {
  return (
    <div className="header">
      <div className="center">
        <span>Come celebrate the union of</span>
        <h1 className="title">Scott Young & Alisia Harry</h1>
        <h2 className="subtitle">Friday, October 13th 2023</h2>
        {!(new Date() === eventDate) && (
          <button
            className="rsvp-button"
            onClick={() => window.location.replace("/#rsvp")}
          >
            RSVP
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
