import React from "react";
import "./About.css";
import About_image_container from "./About_image_container";
import About_description from "./About_description";

const About = () => {
  return (
    <div className="About-me" id="About">
      <section className="About_me_section">
        <About_description />
        <About_image_container />
      </section>
    </div>
  );
};

export default About;
