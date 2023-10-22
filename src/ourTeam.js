import React, { useState, useEffect } from "react";
import "./ourTeam.css";
import { Link } from "react-router-dom";
import TeamMember from "./Teammember.js";
import record from "./record.json";
import plus from "./add.png";
import close from "./close.png";

function OurTeam() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [expandedSections, setExpandedSections] = useState({});
  const [blurAmount, setBlurAmount] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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

    const handleScroll = () => {
      const newBlur = Math.min(window.scrollY / 100, 4);
      setBlurAmount(newBlur);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSection = (sectionName) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <>
      <div className="top-bar"></div>
      <div className="navbar-fixed">
        <nav
          class="navbar navbar-expand-md"
          style={{ backdropFilter: `blur(${blurAmount}px)` }}
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <span className="title">DevCom</span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {isNavOpen ? (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.79997 28.0001L-3.05176e-05 25.2001L11.2 14.0001L-3.05176e-05 2.80006L2.79997 6.10352e-05L14 11.2001L25.2 6.10352e-05L28 2.80006L16.8 14.0001L28 25.2001L25.2 28.0001L14 16.8001L2.79997 28.0001Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_825_211)">
                    <path
                      d="M6 9.97949H42V13.9712H6V9.97949ZM6 21.9548H42V25.9465H6V21.9548ZM6 33.93H42V37.9218H6V33.93Z"
                      fill="#F2F2F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_825_211">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </button>
            <div
              class="collapse navbar-collapse"
              id="navbarNavAltMarkup"
              style={{
                height: screenWidth < 768 && isNavOpen ? "100vh" : "auto",
              }}
            >
              <div
                style={{
                  backgroundColor:
                    screenWidth < 768 && isNavOpen ? "black" : "transparent",
                  height: screenWidth < 768 ? "100vh" : "",
                  width: "100%",
                }}
              >
                <div class="navbar-nav">
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
                    className="plus_icon"
                    src={isExpanded ? close : plus}
                    alt={isExpanded ? "Collapse" : "Expand"}
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
