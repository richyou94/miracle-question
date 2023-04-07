import React, { useRef } from "react";
import logo from "../../images/HOTS-website-logo.png";
import { CSSTransition } from "react-transition-group";
import "./Logo.css";

const Logo = (props) => {
  return <img src={logo} ref={props.logoRef} className="logo" />;
};

export default Logo;
