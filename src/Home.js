import React from "react";
import "./Home.css";
import vector from "./Homepage_vector.png";
import { Link } from "react-scroll";

function Home() {
  return (
    <>
      <div className="top-bar"></div>
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            DevCom
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
              <Link
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
              <Link
                className="nav-link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
              <Link
                className="nav-link"
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                duration={500}
              >
                Team
              </Link>
              <Link
                className="nav-link"
                activeClass="active"
                to="connect"
                spy={true}
                smooth={true}
                duration={500}
              >
                Connect
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container Home-page-content">
        <img className="Home-image" src={vector} alt="keyboard image" />
      </div>
    </>
  );
}

export default Home;
