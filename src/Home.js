import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import vector from "./Homepage_vector.png";
import cube from "./Black cube 2-02 1.png";
import { Link } from "react-scroll";

function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageUrl = screenWidth < 768 ? cube : vector;

  return (
    <>
      <div className="top-bar"></div>
      <div className="navbar-fixed">
        <nav class="navbar navbar-expand-md">
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
      </div>
      <div className="container Home-page-content">
        <p className="motto">Build Cool</p>
        <p className="motto">Stuff</p>
        <img className="Home-image" src={imageUrl} alt="keyboard image" />
      </div>
    </>
  );
}

export default Home;
