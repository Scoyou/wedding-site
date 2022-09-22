import React from "react";
import "./index.css";

const RegistrySection = () => {
  return (
    <div id="registry">
      <div className="section-header">
        <span>
          <h1>Our Registry</h1>
        </span>
      </div>
      <div className="image-container">
        <a
          href="https://www.amazon.com/wedding/scott-young-alisia-harry--october-2023/registry/2KH88XQ0G6NR0"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="Alisia's ring"
            className="img"
            src={process.env.PUBLIC_URL + "/ring.jpeg"}
          />{" "}
        </a>
        <span className="text">
          View our registry by clicking on the image above.
        </span>
      </div>
    </div>
  );
};

export default RegistrySection;