import React from "react";
import "./videos_grid.css";

const Videos_Grid = () => {
  return (
    <div className="video_container">
      <iframe
        className="item"
        src="https://www.youtube.com/embed/0HNbGK9tBZU?si=m49rn5lXxFYFOR51"
        title="YouTube video player"
        frameborder="0"
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0X0kovjzLrw?si=bHWdNSYgUi4M8XOj"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TonbxupPqTg?si=9H-oERbk-8dazpg4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1Q80ilO3fcw?si=ZxucnX3w6yB3Du8S"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Videos_Grid;
