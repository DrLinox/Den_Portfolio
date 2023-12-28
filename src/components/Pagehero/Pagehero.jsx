import React from "react";
import "./pagehero.css";
import Description_header from "./Description_header";
import Image_card from "./Image_card";

const Pagehero = () => {
  return (
    <>
      <div className="page-hero" id="Home">
        <div className="page-hero-bg-image"></div>
        <div className="overlay">
          <div className="overlay_container">
            <Image_card />
            <div className="layout_vertical">
              <Description_header />
              <button className="animate__animated animate__tada animate__delay-1s cta_hero_button">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagehero;
