import React from "react";
import "./testimonials.css";
import Header from "./header";
import Reviews from "./Reviews";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-section">
        <div className="testimonials-section-bg-image"></div>
        <div className="overlay">
          <div className="container">
            <Header />
            <Reviews />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
