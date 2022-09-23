import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import SectionHeader from "../components/SectionHeader";

const Gallery = () => {
  return (
    <div id="gallery">
      {process.env.NODE_ENV === "production" ? (
        <SectionHeader title="Coming Soon!" />
      ) : (
        <>
          {" "}
          <SectionHeader title="About Us" />
          <span>content</span>
          <SectionHeader title="Photo Gallery" />
          <span>content</span>
          <h2>Have more images of the wedding you'd like to share?</h2>
          <h3>email them to us at photos@scottandalisia.com</h3>
        </>
      )}
    </div>
  );
};

export default Gallery;
