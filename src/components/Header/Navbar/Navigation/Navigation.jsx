import React from "react";
import "./navigation.css";

const Navigation = () => {
  return (
    <>
      <ul className="navigation-links">
        <a href="#Home">
          <li>Home</li>
        </a>
        <a href="#Portfolio">
          <li>Portfolio</li>
        </a>
        <a href="#About">
          <li>About Me</li>
        </a>
        <a href="#Contact">
          <li>Contact Me</li>
        </a>
      </ul>
    </>
  );
};

export default Navigation;
