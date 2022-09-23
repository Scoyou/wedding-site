import React, { useState } from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./index.css";
import CollapsedNav from "./CollapsedNav";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [showCollapsedNav, setShowCollapsedNav] = useState(false);
  const { width } = useWindowDimensions();

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className={colorChange ? "navbar colorChange" : "navbar"}>
      {showCollapsedNav && (
        <CollapsedNav setShowCollapsedNav={setShowCollapsedNav} />
      )}
      <span className="nav-title">Scott & Alisia</span>
      {width < 600 ? (
        <img
          alt="nav menu"
          className="nav-item"
          src={process.env.PUBLIC_URL + "/menu-icon.png"}
          onClick={() => setShowCollapsedNav(true)}
          height='20'
          width='20'
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Navbar;
