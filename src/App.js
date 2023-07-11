import React from "react";
import "./App.css";
import keyboard from "./Keyboard_white.png";

function App() {
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
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                About
              </a>
              <a class="nav-link" href="#">
                Projects
              </a>
              <a class="nav-link" href="#">
                Team
              </a>
              <a class="nav-link" href="#">
                Connect
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container Home-page-content">
        <p className="home-text">Build Cool Stuff </p>
        <img className="Home-image" src={keyboard} alt="keyboard image" />
      </div>
    </>
  );
}

export default App;
