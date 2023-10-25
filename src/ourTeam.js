import React, { useState, useEffect } from "react";
import "./ourTeam.css";
import { Link } from "react-router-dom";
import TeamMember from "./Teammember.js";
import record from "./record.json";
import plus from "./add.png";
import close from "./close.png";
import NavBar from "./NavBar";

function OurTeam() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [expandedSections, setExpandedSections] = useState({});
  // const [blurAmount, setBlurAmount] = useState(0);
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

    // const handleScroll = () => {
    //   const newBlur = Math.min(window.scrollY / 100, 4);
    //   setBlurAmount(newBlur);
    // };

    window.addEventListener("resize", handleResize);
    // window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      // window.removeEventListener("scroll", handleScroll);
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
      <NavBar></NavBar>
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
