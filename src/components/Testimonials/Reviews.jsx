import React from "react";
import "./testimonials.css";

const Reviews = () => {
  const p = {
    fontSize: "0.7rem",
    width: "85%",
    lineHeight: 2,
  };
  return (
    <div className="review">
      <div className="review-boxes">
        <p style={p}>
          Consectetur quo officiis perspiciatis voluptate commodi hic assumenda
          unde nam dicta. Quisquam vel molestias labore repellendus.
          Consequatur.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "start",
          }}
        >
          <div
            style={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}
          >
            <h4 style={{ color: "white", fontWeight: "700" }}>Sam Ahmed</h4>
            <h2
              style={{
                color: "var(--primary-color)",
                letterSpacing: "3px",
                fontSize: "0.75rem",
              }}
            >
              Youtuber
            </h2>
          </div>
          <i class="fa-solid fa-quote-right"></i>
        </div>
      </div>
      <div className="review-boxes">
        <p style={p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae
          exercitationem accusamus.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "start",
          }}
        >
          <div
            style={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}
          >
            <h4 style={{ color: "white", fontWeight: "700" }}>Sam Ahmed</h4>
            <h2
              style={{
                color: "var(--primary-color)",
                letterSpacing: "3px",
                fontSize: "0.75rem",
              }}
            >
              Youtuber
            </h2>
          </div>
          <i class="fa-solid fa-quote-right"></i>
        </div>
      </div>
      <div className="review-boxes">
        <p style={p}>
          Beatae possimus excepturi eum, odio quo nihil molestiae, quasi porro
          ducimus dolor doloremque ab, voluptatem repellat quod iusto?
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "start",
          }}
        >
          <div
            style={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}
          >
            <h4 style={{ color: "white", fontWeight: "700" }}>Sam Ahmed</h4>
            <h2
              style={{
                color: "var(--primary-color)",
                letterSpacing: "3px",
                fontSize: "0.75rem",
              }}
            >
              Youtuber
            </h2>
          </div>
          <i class="fa-solid fa-quote-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
