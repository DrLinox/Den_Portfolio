import React from "react";
import "./contact.css";
import Cta_Button from "../Header/Navbar/Navigation/Cta_Button";

const Contact = () => {
  return (
    <div className="contact_style">
      <h1 className="header_title">Contact Me</h1>
      <form
        className="contact_container"
        action="https://formsubmit.co/lino13hamid@gmail.com"
        method="POST"
      >
        <input
          type="text"
          id={"name"}
          name="name"
          placeholder="Fullname"
          required
        />
        <input
          type="email"
          id={"email"}
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          name="Message"
          id="Message"
          cols="30"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="submit_button">Contact Us</button>
        <div className="cards_container">
          <div className="contact_cards">
            <img
              className="icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
              alt=""
            />
          </div>
          <div className="contact_cards">
            <img
              className="icon"
              src="https://bayrivercolleges.ca/files/logo-x-twitter.svg"
              alt=""
            />
          </div>
          <div className="contact_cards">
            <img
              className="facebook_icon"
              src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
              alt=""
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
