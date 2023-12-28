import React from "react";
import "./cta_button.css";

const Cta_Button = () => {
  return (
    <a href="#Contact">
      <button className="animate__animated animate__tada animate__delay-1s cta_button">
        Contact Us
      </button>
    </a>
  );
};

export default Cta_Button;
