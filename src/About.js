import React from "react";
import "./About.css";
import image from "./About_img.png";
import clrp from "./clrpick.png";
import ter from "./terminal.png";

function About() {
  return (
    <div className="container About-us-container">
      <div className="row About-us-content">
        <div className="text-column">
          <div className="row About-us">
            <p className="About-us-title">Who we are?</p>
            <p className="About-us-desc">
              We are a group of highly motivated developers and designers from
              IIT Bombay who are passionate about using code and design to make
              a difference in the lives of students. We believe that everyone
              deserves to have a smooth and enjoyable college experience, and we
              are committed to using our skills to eliminate the many
              frustrations that students face on a daily basis.
            </p>
            <img
              className="clrpicker_image"
              src={clrp}
              alt="an image of a color picker"
            />
          </div>
          <div className="row About-work">
            <p className="About-work-title">What we do?</p>
            <p className="About-work-desc">
              We identify problems, ideate solutions, and implement them with
              creativity and logic. We are responsible for maintaining InstiApp,
              the single point of access to all IIT Bombay’s happenings of
              student life. We also developed ResoBin, the one-stop solution for
              all the academic resources, and Mess I, which streamlines the
              routines of mess.
            </p>
            <img
              className="terminal_image"
              src={ter}
              alt="an image of a terminal"
            />
          </div>
        </div>
        <div className="image-column">
          <img
            className="devcom-img"
            src={image}
            alt="Image describing devcom"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
