import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="root">
      <div className="nav">
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
      <Outlet />
    </div>
  );
};

export default Root;
