import React from "react";
import "./BackgroundImage.css";

const BackgroundImage = (props) => {
  return <div ref={props.imageRef} className="background-image">{props.children}</div>;
};

export default BackgroundImage;
