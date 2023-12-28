import React from "react";

const About_description = () => {
  const header = {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    gap: "2.5rem",
    textAlign: "left",
    width: "50%",
  };
  const h1 = {
    color: "whitesmoke",
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: "3rem",
  };
  const h2 = {
    color: "var(--primary-color)",
    textTransform: "uppercase",
    letterSpacing: "3px",
    fontSize: "0.85rem",
  };
  const p = {
    fontSize: "0.82rem",
    width: "85%",
    lineHeight: 2,
    color: "grey",
  };
  return (
    <div style={header}>
      <h2 style={h2}>Den Studio</h2>
      <h1 style={h1}>
        Hello, I'm <span style={{ color: "var(--primary-color)" }}>Den</span> 👋
      </h1>
      <p style={p}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
        dignissimos, quod facere inventore numquam consequatur perspiciatis
        nulla repellendus itaque vero reiciendis possimus voluptatibus
        necessitatibus doloribus architecto praesentium alias magnam accusamus.
      </p>
      <p
        style={{
          fontSize: "0.82rem",
          lineHeight: 2,
          color: "white",
          fontWeight: "700",
          fontStyle: "italic",
        }}
      >
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
        dignissimos.'
      </p>
      <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
        <h4 style={{ color: "white", fontWeight: "700" }}>Den Studio</h4>
        <h2
          style={{
            color: "var(--primary-color)",
            letterSpacing: "3px",
            fontSize: "0.8rem",
          }}
        >
          Video editor
        </h2>
      </div>
    </div>
  );
};

export default About_description;
