import React from "react";

const About_image_container = () => {
  const myImg = {
    width: "600px",
    height: "500px",
    objectFit: "cover",
  };
  return (
    <div>
      <img
        src="/src/Images/WhatsApp Image 2023-10-21 at 11.47.17.jpeg"
        alt=""
        style={myImg}
      />
    </div>
  );
};

export default About_image_container;
