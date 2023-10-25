import React, { useEffect } from "react";
import "./Projectinsti.css";
import Connect from "./Connect";
import NavBar from "./NavBar";

function Projectnewbee() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className="project-box">
        <div className="project-box-head">
          <div className="project-logo">
            <div className="project-image"></div>
            <div className="project-name">
              <p>NewBee</p>
            </div>
          </div>
          <div className="project-link">
            <div className="website-link">
              <a href="#">Website</a>
            </div>
            <div className="github-link">
              <a href="#">Github</a>
            </div>
          </div>
        </div>
        <div className="project-box-body">
          <p>
            NewBee is a website dedicated to helping freshies explore their way
            through their initial days at IIT Bombay. Students be feeling
            confused and intimidated about what all stuff they have to register
            for when the fees should be paid, and what they have to bring along
            with them while coming to campus. That's why in collaboration with
            Student Mentorship Program at IIT Bombay, we've created NewBee, a
            portal where you can ask questions about anything related to your
            initial days at IITB.
          </p>
          <p>
            There is also a comprehensive FAQ(InfoPosts) section that covers all
            of the most common questions that freshies have.
          </p>
          <p>
            Here are some of the benefits of using NewBee:
            <ul>
              <li>
                You can ask questions about anything related to your admission
                process and initial days at IITB.
              </li>
              <li>
                You can get answers from current first-year students and SMPCs
                who have been through it all before.
              </li>
              <li>
                You can access a comprehensive FAQ section that covers all of
                the most common questions that freshies have.
              </li>
              <li>
                You can connect with other freshies who are going through the
                same thing as you.
              </li>
            </ul>
          </p>

          <p>
            So whether you're wondering about how to register for classes or
            what to do on your first day on campus, NewBee is the perfect
            resource for you.
          </p>
        </div>
      </div>
      <Connect />
    </>
  );
}

export default Projectnewbee;
