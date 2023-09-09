import React, { useState } from "react";
import "./Projects.css";
import resobin from "./ResoBin.png";
import messi from "./Mess I.png";
import instiapp from "./InstiApp.png";
import newbee from "./NewBee.png";
import { Link } from "react-router-dom";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectsData = [
    { id: 0, title: "Resobin", imgSrc: resobin, link: "/resobin" },
    { id: 1, title: "InstiApp", imgSrc: instiapp, link: "/instiapp" },
    { id: 2, title: "Mess-I", imgSrc: messi, link: "/messi" },
    { id: 3, title: "NewBee", imgSrc: newbee, link: "/newbee" },
  ];

  const isMobile = window.innerWidth <= 768;

  const displayedProjects = isMobile
    ? projectsData.slice(currentIndex, currentIndex + 1)
    : projectsData.slice(currentIndex, currentIndex + 2);

  return (
    <div className="container project-container">
      <div className="row project-head">
        <div className="project">
          <p className="projects">Projects</p>
        </div>
        <div className="arrow-buttons">
          <button
            className="arrow-left"
            onClick={() =>
              setCurrentIndex((prev) => Math.max(prev - (isMobile ? 1 : 2), 0))
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg>
          </button>
          <button
            className="arrow-right"
            onClick={() =>
              setCurrentIndex((prev) =>
                Math.min(
                  prev + 1,
                  isMobile ? projectsData.length - 1 : projectsData.length - 2
                )
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="row project-body">
        <div className="project-slider">
          {displayedProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-title-box">
                <p className="project-title">{project.title}</p>
              </div>
              <div className="project-image-box">
                <Link to={project.link}>
                  <img
                    className="project-img"
                    src={project.imgSrc}
                    alt={`${project.title} logo`}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
