import React from "react";
import "./index.css";
import SectionHeader from "../SectionHeader";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const RegistrySection = () => {
  const { width } = useWindowDimensions();

  return (
    <div id="registry">
      <SectionHeader title="Our Registry" />
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
        <div className="middle">
          <span className="text">View Registry</span>
        </div>
        {width < 600 && (
          <span className="small-screen-text">
            Click the image above to view our registry.
          </span>
        )}
      </div>
    </div>
  );
};

export default RegistrySection;
