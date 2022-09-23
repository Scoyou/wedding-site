import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
      <span className="nav-title">Scott & Alisia</span>
      <Link to="/gallery" className="nav-item">
        Gallery
      </Link>

      <Link
        to="/"
        className="nav-item"
        onClick={() => window.location.replace("/#home")}
      >
        Home
      </Link>
    </div>
  );
};

export default Navbar;
