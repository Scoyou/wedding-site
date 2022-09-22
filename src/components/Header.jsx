import React from "react";
const Header = ({ eventDate }) => {
  return (
    <div className="header">
      <div className="center">
        <h1 className="title">Save The Date!</h1>
        <h2 className="subtitle">Friday, October 13th 2023</h2>
        {!new Date() === eventDate && (
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
