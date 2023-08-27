import React, { useState, useEffect } from "react";
import "./OurTeam.css";
import { Link } from "react-router-dom";
import palash from "./members_images/Palash Mittal.jpg";
import rahul from "./members_images/Rahul Kumar.jpg";
import vidit from "./members_images/Vidit Khazanchi.jpeg";
import tanmay from "./members_images/Tanmay Jain.jpg";
import akshat from "./members_images/Akshat Jain.jpeg";
import amit from "./members_images/AMIT MALAKAR.jpeg";
import ananya from "./members_images/Ananya Chavadhal.jpg";
import asmi from "./members_images/Asmi Rangnekar.jpeg";
import chaitanya from "./members_images/Chaitanya Keshri.jpg";
import chinmay from "./members_images/Chinmay Tripurwar.jpg";
import dipayan from "./members_images/Dipayan Das.jpg";
import hari from "./members_images/Harigovind Raghunath.jpeg";
import jatin from "./members_images/Jatin Singhal.jpeg";
import mahesh from "./members_images/Mahesh Kumar.jpg";
import nivedha from "./members_images/Nivedha G.jpg";
import omkar from "./members_images/Omkar Shirpure.jpg";
import parth from "./members_images/Parth Batwara.jpeg";
import sahil from "./members_images/Sahil Choudhary.jpeg";
import saurabh from "./members_images/Saurabh Kumar.jpg";
import shivam from "./members_images/Shivam Kumar.jpg";
import tanishka from "./members_images/Tanishka Kabra.jpg";
import tarus from "./members_images/Tarus Pande.jpg";
import github from "./members_images/github_logo.jpg";
import linkedin from "./members_images/linkedin_logo.jpg";
import behance from "./members_images/behance_logo.jpg";
import user from "./members_images/user.jpg";
import plus from "./add.png";

function OurTeam() {
  const [expandedCategories, setExpandedCategories] = useState([]);
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

  const toggleCategory = (categoryId) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(
        expandedCategories.filter((id) => id !== categoryId)
      );
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };

  const isCategoryExpanded = (categoryId) =>
    expandedCategories.includes(categoryId);

  return (
    <>
      <div className="top-bar"></div>
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
      <div className="outer-team-container">
        <div className="head-section">
          <div className="heading">
            <p className="headings">The Team</p>
          </div>
          <div className="content">
            <p className="contents">
              A group of highly enthusiastic and capable designers and
              developers, are are on the quest to change the student life at IIT
              Bombay
            </p>
          </div>
        </div>
        <div className="body-section">
          <div
            className={`row OC-section ${
              isCategoryExpanded("OCs") ? "expanded" : ""
            }`}
          >
            <div className="position">
              <p className="post">Overall Coordinators</p>
              <img
                className="plus_icon"
                src={plus}
                onClick={() => toggleCategory("OCs")}
              />
            </div>
            {(isCategoryExpanded("OCs") || screenWidth >= 768) && (
              <div className="post-holders">
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Adithya</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={user}
                          alt="adithya's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link>
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link>
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Palash</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={palash}
                          alt="palash's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/palash-mittal-4224761bb">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/PalMit2002">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`row project-lead-section ${
              isCategoryExpanded("project-leads") ? "expanded" : ""
            }`}
          >
            <div className="position">
              <p className="post">Project Leads</p>
              <img
                className="plus_icon"
                src={plus}
                onClick={() => toggleCategory("project-leads")}
              />
            </div>
            {(isCategoryExpanded("project-leads") || screenWidth >= 768) && (
              <div className="post-holders">
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Abhijat</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={user}
                          alt="abhijat's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link>
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link>
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Dheer</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={user}
                          alt="dheer's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link>
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link>
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Krishna</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={user}
                          alt="krishna's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link>
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link>
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Rahul</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={rahul}
                          alt="rahul's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/rahul-kumar-b79b5b23a">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link>
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Sanskar</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={user}
                          alt="sanskar's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link>
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link>
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Vedant</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={user}
                          alt="vedant's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link>
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link>
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Vidit</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={vidit}
                          alt="vidit's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://in.linkedin.com/in/viditkhazanchi">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/vk0812">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`row design-lead-section ${
              isCategoryExpanded("design-leads") ? "expanded" : ""
            }`}
          >
            <div className="position">
              <p className="post">Design Leads</p>
              <img
                className="plus_icon"
                src={plus}
                onClick={() => toggleCategory("design-leads")}
              />
            </div>
            {(isCategoryExpanded("design-leads") || screenWidth >= 768) && (
              <div className="post-holders">
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Chilyang</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={user}
                          alt="chilyang's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link>
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link>
                            <img
                              className="logo"
                              src={behance}
                              alt="behance logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Tanmay</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={tanmay}
                          alt="tanmay's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://in.linkedin.com/in/tanmay-jain-a19916143">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://www.behance.net/tanmayjain15">
                            <img
                              className="logo"
                              src={behance}
                              alt="behance logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`row Developers-section ${
              isCategoryExpanded("devs") ? "expanded" : ""
            }`}
          >
            <div className="position">
              <p className="post">Developers</p>
              <img
                className="plus_icon"
                src={plus}
                onClick={() => toggleCategory("devs")}
              />
            </div>
            {(isCategoryExpanded("devs") || screenWidth >= 768) && (
              <div className="post-holders">
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Akshat</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={akshat}
                          alt="akshat's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/akshat-jain-069822250/">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/akshat1423/">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Aman</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={user}
                          alt="aman's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link>
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link>
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Amit</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={amit}
                          alt="amit's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/amit-malakar-983175259">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/amitmalakariitb">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Ananya</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={ananya}
                          alt="ananya's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/ananya-chavadhal-852656252">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/ananyac9">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Asmi</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={asmi}
                          alt="asmi's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/asmi-rangnekar-066b07256">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/AsmiRangnekar">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Chaitanya</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={chaitanya}
                          alt="chaitanya's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="http://www.linkedin.com/in/chaitanya-keshri">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/chaitanyakeshri">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Chinmay</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={chinmay}
                          alt="chinmay's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/chinmay-tripurwar">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/Chinoscode111">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Dipayan</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={dipayan}
                          alt="dipayan's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/dipayan-d-039015123">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/dd-002">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Harigovind</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={hari}
                          alt="hari's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/harigovind-raghunath-024784252">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/HariRags">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Jatin</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={jatin}
                          alt="jatin's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/jatin-singhal-734694246">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/PSYCHNERD2512">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Mahesh</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={mahesh}
                          alt="mahesh's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/mahesh-kumar-prajapat-8687a5276">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/kumar-09">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Nivedha</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={nivedha}
                          alt="nivedha's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/nivedha-g-2b4244253">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/gl-nivedha">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Omkar</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={omkar}
                          alt="omkar's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/omkar-shirpure">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/SHIRPUREOMKAR">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Parth</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={parth}
                          alt="parth's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/parth-batwara-24850125b">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/Parth9001">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Saurabh</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={saurabh}
                          alt="saurabh's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/srbh001/">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/srbh001">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Shivam</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={shivam}
                          alt="shivam's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/shivam-kumar-925012254">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="http://github.com/ShivamKr326">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Tanishka</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={tanishka}
                          alt="tanishka's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link>
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/Tanishkakabra">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Tarus</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={tarus}
                          alt="tarus's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="http://www.linkedin.com/in/tarus-pande-3209a1282">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://github.com/taruspande">
                            <img
                              className="logo"
                              src={github}
                              alt="github logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`row designers-section ${
              isCategoryExpanded("degs") ? "expanded" : ""
            }`}
          >
            <div className="position">
              <p className="post">Designers</p>
              <img
                className="plus_icon"
                src={plus}
                onClick={() => toggleCategory("degs")}
              />
            </div>
            {(isCategoryExpanded("degs") || screenWidth >= 768) && (
              <div className="post-holders">
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Sahil</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={sahil}
                          alt="sahil's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link to="https://www.linkedin.com/in/sahil-chaudhary-097b3226b">
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link to="https://www.behance.net/sahildesignzz">
                            <img
                              className="logo"
                              src={behance}
                              alt="behance logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-box">
                  <div className="member">
                    <p className="member-name">Shreekar</p>
                    <div className="card">
                      <div className="front">
                        <img
                          className="member-img"
                          src={user}
                          alt="shreekar's image"
                        />
                      </div>
                      <div className="back">
                        <div className="holder">
                          <Link>
                            <img
                              className="logo"
                              src={linkedin}
                              alt="linkedIn logo"
                            />
                          </Link>
                          <Link>
                            <img
                              className="logo"
                              src={behance}
                              alt="behance logo"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
