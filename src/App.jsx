import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Header/Navbar/navbar";
import "./app.css";
import Pagehero from "./components/Pagehero/Pagehero";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/AboutMe/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Pagehero />
      <Portfolio />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
