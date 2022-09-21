import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="root">
      <div className="nav">
        <Link
          to="/"
          className="nav-item"
          onClick={() => window.location.replace("/#home")}
        >
          Home
        </Link>
        <Link to="/gallery" className="nav-item">
          Gallery
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
