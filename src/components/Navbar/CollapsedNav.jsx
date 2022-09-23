import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const CollapsedNav = ({ setShowCollapsedNav }) => {
  return (
    <div className="collapsed-nav">
      <img
        alt="nav menu"
        className="nav-item"
        src={process.env.PUBLIC_URL + "/menu-icon.png"}
        onClick={() => setShowCollapsedNav(false)}
        height="20"
        width="20"
      />
      <ul>
        <li>
          <Link
            to="/"
            className="collapsed-nav-item"
            onClick={() => setShowCollapsedNav(false)}
          >
            Home
          </Link>
        </li>
        <hr className="collapsed-nav-hr" />
        <li>
          {" "}
          <Link
            to="/gallery"
            className="collapsed-nav-item"
            onClick={() => setShowCollapsedNav(false)}
          >
            Gallery
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CollapsedNav;
