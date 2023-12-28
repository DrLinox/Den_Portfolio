import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services_section">
      <div className="header">
        <h2>My Services</h2>
        <h1>
          <span style={{ color: "var(--primary-color)" }}>amazing</span> quality{" "}
          <span style={{ color: "var(--primary-color)" }}>videos</span>
        </h1>
      </div>
      <div className="cards">
        <div className="services_cards">
          <i class="fa-solid fa-gamepad"></i>
          <span>Gaming</span>
        </div>
        <div className="services_cards">
          <i class="fa-solid fa-microphone"></i>
          <span>Podcast</span>
        </div>
        <div className="services_cards">
          <i class="fa-solid fa-camera"></i>
          <span>Vlogs</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
