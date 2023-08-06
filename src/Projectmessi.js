import React from "react";
import "./Projectmessi.css";
import { Link } from "react-router-dom";

function Projectmessi() {
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
      <div className="project-box">
        <div className="project-box-head">
          <div className="project-logo">
            <div className="project-image"></div>
            <div className="project-name">
              <p>Mess I</p>
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
            Mess I is a mess digitization platform that optimizes mess
            functioning. It shows mess statistics, the option to disable mess
            for opt-out students and rebate functionality. Now you can apply for
            mess rebates online, which saves the hours of standing in line and
            the number of pages it saves.
          </p>
          <p>
            Some of the cool features of this project:
            <ul>
              <li>
                Mess card management: Mess I allows you to manage your mess card
                online. You can view your balance, recharge your card, and track
                your spending.
              </li>
              <li>
                Mess bill calculation: Mess I automatically calculates your mess
                bill based on your meal plan and consumption. You can also view
                your past bills and track your spending trends.
              </li>
              <li>
                Rebate functionality: Mess I allows you to apply for mess
                rebates online. This is a great way to save money on your mess
                bill.
              </li>
              <li>
                Offline functionality: Mess I can be used offline. This means
                that you can still access your mess card balance, view your mess
                bill, and track your spending even if you do not have an
                internet connection.
              </li>
            </ul>
          </p>

          <p>
            Mess I is a powerful mess digitization platform that can help you
            save time, money, and improve your mess experience. You will be glad
            you did.
          </p>
        </div>
      </div>
    </>
  );
}

export default Projectmessi;
