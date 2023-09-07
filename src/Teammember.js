import React from "react";
import { Link } from "react-router-dom";
import "./Teammember.css";
import github from "./members_images/github_logo.jpg";
import linkedin from "./members_images/linkedin_logo.jpg";
import behance from "./members_images/behance_logo.jpg";

function TeamMember({ name, imageSrc, linkedinLink, githubLink, behanceLink }) {
  return (
    <div className="member-box">
      <div className="member">
        <p className="member-name">{name}</p>
        <div className="card">
          <div className="front">
            <img
              className="member-img"
              src={imageSrc}
              alt={`${name}'s image`}
            />
          </div>
          <div className="back">
            <div className="holder">
              {linkedinLink && (
                <Link to={linkedinLink}>
                  <img className="logo" src={linkedin} alt="linkedIn logo" />
                </Link>
              )}
              {githubLink && (
                <Link to={githubLink}>
                  <img className="logo" src={github} alt="github logo" />
                </Link>
              )}
              {behanceLink && (
                <Link to={behanceLink}>
                  <img className="logo" src={behance} alt="behance logo" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
