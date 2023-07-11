import React from "react";
import "./Connect.css";
import logo from "./DC_logo.png";

function Connect() {
  return (
    <div className="container connect-container">
      <div className="row connect-section-head">
        <div className="col-2 connects">
          <p className="connect">Connect</p>
        </div>
      </div>
      <div className="row connect-section-body">
        <div className="col-1 social-handles">
          <div className="social-media Twitter">
            <a href="#">Twitter</a>
          </div>
          <div className="social-media Instagram">
            <a href="#">Instagram</a>
          </div>
          <div className="social-media LinkedIn">
            <a href="#">LinkedIn</a>
          </div>
          <div className="social-media Mail">
            <a href="#">Mail</a>
          </div>
          <div className="social-media Behance">
            <a href="#">Behance</a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-1 project-handles">
          <div className="projects-link InstiApp">
            <a href="#">InstiApp</a>
          </div>
          <div className="projects-link Resobin">
            <a href="#">Resobin</a>
          </div>
          <div className="projects-link Mess-I">
            <a href="#">Mess-I</a>
          </div>
          <div className="projects-link NewBee">
            <a href="#">NewBee</a>
          </div>
        </div>
        <div className="col last-remarks">
          <div className="remark-box">
            <p className="remark">
              Easing student life at IIT Bombay since 2018
            </p>
          </div>
        </div>
      </div>
      <div className="row connect-section-footer">
        <img className="dc-logo" src={logo} alt="DevCom logo" />
      </div>
    </div>
  );
}

export default Connect;
