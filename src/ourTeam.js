import React, { useState, useEffect } from "react";
import "./ourTeam.css";
import { Link } from "react-router-dom";
import TeamMember from "./Teammember.js";
import record from "./record.json";
import plus from "./add.png";

function OurTeam() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [expandedSections, setExpandedSections] = useState({});

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("./members_images", false, /\.(jpg|jpeg)$/)
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSection = (sectionName) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  return (
    <>
      <div className="top-bar"></div>
      <div className="navbar-fixed">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <span className="title">DevCom</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/">
                  About
                </Link>
                <Link className="nav-link" to="/">
                  Projects
                </Link>
                <Link className="nav-link" to="/">
                  Team
                </Link>
                <Link className="nav-link" to="/">
                  Connect
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="outer-team-container">
        <div className="head-section">
          <div className="heading">
            <p className="headings">The Team</p>
          </div>
          <div className="content">
            <p className="contents">
              A group of highly enthusiastic and capable designers and
              developers, we are on the quest to change the student life at IIT
              Bombay
            </p>
          </div>
        </div>
        <div className="body-section">
          {Object.keys(record).map((sectionName, idx) => (
            <div className="row" key={idx}>
              <div className="position">
                <p className="post">{sectionName}</p>
                {screenWidth < 768 && (
                  <img
                    src={plus}
                    alt="Expand"
                    onClick={() => toggleSection(sectionName)}
                  />
                )}
              </div>
              {(screenWidth >= 768 || expandedSections[sectionName]) && (
                <div className="post-holders">
                  {record[sectionName].map((member, idx) => (
                    <TeamMember
                      key={idx}
                      name={member.name}
                      imageSrc={
                        member.imagesrc
                          ? images[
                              member.imagesrc.replace("./members_images/", "")
                            ]
                          : null
                      }
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OurTeam;
