import React from "react";
import { Link, Outlet } from "react-router-dom";
import {Navbar} from "responsive-nav-react";

const Root = () => {
  return (
    <div className="root">
      <Navbar
        navTitle="Scott & Alisia"
        menuIcon={process.env.PUBLIC_URL + "/menu-icon.png"}
        iconHeight="20"
        iconWidth="20"
      >
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
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Root;
