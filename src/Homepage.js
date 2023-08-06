import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Team from "./Team";
import Connect from "./Connect";
import { Element } from "react-scroll";

function Homepage() {
  return (
    <>
      <Home />
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="team">
        <Team />
      </Element>
      <Element name="connect">
        <Connect />
      </Element>
    </>
  );
}

export default Homepage;
