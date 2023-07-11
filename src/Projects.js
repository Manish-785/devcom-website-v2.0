import React, { useRef, useState, useEffect } from "react";
import "./Projects.css";
import resobin from "./Resobin.png";

function Projects() {
  const projectSliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const numVisibleCards = 2;

  const scrollProjectSlider = (scrollOffset) => {
    console.log("reached");
    setScrollPosition(
      (prevScrollPosition) => prevScrollPosition + scrollOffset
    );
    projectSliderRef.current.scrollLeft += scrollOffset;
    console.log(scrollPosition);
  };

  const handleResize = () => {
    if (projectSliderRef.current) {
      setCardWidth(projectSliderRef.current.offsetWidth / numVisibleCards);
    }
  };

  // Update card width on initial render and window resize
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container project-container">
      <div className="row project-head">
        <div className="col-2 project">
          <p className="projects">Projects</p>
        </div>
        <div className="col-9"></div>
        <div className="col-1 arrow-buttons">
          <button
            className="arrow-left"
            onClick={() => {
              console.log(-cardWidth);
              scrollProjectSlider(-(cardWidth + 12));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg>
          </button>
          <button
            className="arrow-right"
            onClick={() => scrollProjectSlider(cardWidth + 12)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="row project-body">
        <div className="project-slider" ref={projectSliderRef}>
          <div className="project-card">
            <div className="project-title-box">
              <p className="project-title">Resobin</p>
            </div>
            <div className="project-image-box">
              <img className="project-image" src={resobin} alt="resobin logo" />
            </div>
          </div>
          <div className="project-card">
            <div className="project-title-box">
              <p className="project-title">InstiApp</p>
            </div>
            <div className="project-image-box">
              <img className="project-image" src={resobin} alt="resobin logo" />
            </div>
          </div>
          <div className="project-card">
            <div className="project-title-box">
              <p className="project-title">Mess-I</p>
            </div>
            <div className="project-image-box">
              <img className="project-image" src={resobin} alt="resobin logo" />
            </div>
          </div>
          <div className="project-card last-card">
            <div className="project-title-box">
              <p className="project-title">NewBee</p>
            </div>
            <div className="project-image-box">
              <img className="project-image" src={resobin} alt="resobin logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
