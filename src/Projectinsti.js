import React from "react";
import "./Projectinsti.css";
import Connect from "./Connect";
import { Link } from "react-router-dom";

function Projectinsti() {
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
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link class="nav-link" to="/">
                  About
                </Link>
                <Link class="nav-link" to="/">
                  Projects
                </Link>
                <Link class="nav-link" to="/">
                  Team
                </Link>
                <Link class="nav-link" to="/">
                  Connect
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="project-box">
        <div className="project-box-head">
          <div className="project-logo">
            <div className="project-image"></div>
            <div className="project-name">
              <p>InstiApp</p>
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
            InstiApp is the official app of IIT Bombay. It provides students
            with a single point of access to all of the institute's resources,
            including:
          </p>
          <ul>
            <li>
              A main feed that shows updates from users and entities that the
              user follows, as well as popular and upcoming events from major
              institute bodies.
            </li>
            <li>
              A placement/training blog with the option to get notifications for
              all posts or posts with certain keywords.
            </li>
            <li>
              An institute map with navigation and all currently active events
              visible as clickable icons.
            </li>
            <li>
              A list of mess menus for all hostels, with the user's hostel's
              current-day menu occupying the top position.
            </li>
            <li>The calendars of major institute bodies.</li>
            <li>
              Emergency contacts, as well as the name, profile pic, and phone
              number of every PoR holder within the institute, are arranged and
              shown in a structured manner with a subsection for each council.
            </li>
          </ul>
          <p>
            InstiApp is a valuable resource for all IIT Bombay students. It is a
            great way to stay connected with the institute, stay informed about
            events, and find resources.
          </p>
        </div>
      </div>
      <Connect />
    </>
  );
}

export default Projectinsti;
