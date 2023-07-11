import React from "react";
import "./About.css";
import arrow from "./img1.png";
import colorDropper from "./img4.png";
import terminal from "./img2.png";
import colorpicker from "./img3.png";

function About() {
  return (
    <div className="container About-us-container">
      <div className="row About-us-content">
        <div className="text-column">
          <div className="row About-us">
            <p className="About-us-title">Who we are?</p>
            <p className="About-us-desc">
              Design is about more than just making things look good. It's about
              creating experiences that are both functional and visually
              appealing. It can also evoke emotions, create a sense of place,
              and even change the way we think. We are a team of designers and
              developers solving IIT Bombay’s problems through code and colors.
            </p>
          </div>
          <div className="row About-work">
            <p className="About-work-title">What we do?</p>
            <p className="About-work-desc">
              Design is about more than just making things look good. It's about
              creating experiences that are both functional and visually
              appealing. It can also evoke emotions, create a sense of place,
              and even change the way we think. We are a team of designers and
              developers solving IIT Bombay’s problems through code and colors.
            </p>
          </div>
        </div>
        <div className="image-column">
          <img className="terminal-img" src={terminal} alt="terminal img" />
          <img className="arrow-img" src={arrow} alt="arrow img" />
          <img
            className="colorpicker-img"
            src={colorpicker}
            alt="colorpicker img"
          />
          <img
            className="colordropper-img"
            src={colorDropper}
            alt="color dropper img"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
