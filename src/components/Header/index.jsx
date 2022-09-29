import React from "react";
import "./index.css";

const Header = ({ intro, title, subTitle, content }) => {
  return (
    <div className="header">
      <div className="center">
        {intro && <span>{intro}</span>}
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">
          {subTitle}
        </h2>
        {content}
      </div>
    </div>
  );
};

export default Header;
