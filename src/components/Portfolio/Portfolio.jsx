import React from "react";
import "./portfolio.css";
import Videos_Grid from "./Videos_Grid/Videos_Grid";

const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
      <div className="header">
        <h2>Welcome to Den Studio</h2>
        <h1>My work</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          dignissimos, quod facere inventore numquam consequatur perspiciatis
          nulla repellendus itaque vero reiciendis possimus voluptatibus
          necessitatibus doloribus architecto praesentium alias magnam
          accusamus.
        </p>
      </div>
      <Videos_Grid />
    </div>
  );
};

export default Portfolio;
