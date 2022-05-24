import React from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import Skills from "./Components/Pages/Skills";
import Testimonial from "./Components/Pages/Testimonial";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Navbar /> <br />
      <br />
      <Background />
      <Home /> <br />
      <br />
      <Projects />
      <Skills />
      <Testimonial />
      <Contact />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
