import React from "react";
import image from "../assets/bookmyshow.png";
import "../Style/Home.css";

const Image = () => {
  return (
    <div className="imageIcon">
      <img src={image} alt="img" />
    </div>
  );
};

export default Image;
