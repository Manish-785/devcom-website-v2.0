import React, { useState, useEffect } from "react";
import "./OurTeam.css";
import { Link } from "react-router-dom";
import TeamMember from "./Teammember.js";
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
                <TeamMember
                  name="Adithya"
                  imageSrc={user}
                  linkedinLink=""
                  githubLink=""
                />
                <TeamMember
                  name="Palash"
                  imageSrc={palash}
                  linkedinLink="https://www.linkedin.com/in/palash-mittal-4224761bb"
                  githubLink="https://github.com/PalMit2002"
                />
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
                <TeamMember
                  name="Abhijat"
                  imageSrc={user}
                  linkedinLink=""
                  githubLink=""
                />
                <TeamMember
                  name="Dheer"
                  imageSrc={user}
                  linkedinLink=""
                  githubLink=""
                />
                <TeamMember
                  name="Krishna"
                  imageSrc={user}
                  linkedinLink=""
                  githubLink=""
                />
                <TeamMember
                  name="Rahul"
                  imageSrc={rahul}
                  linkedinLink="https://www.linkedin.com/in/rahul-kumar-b79b5b23a"
                  githubLink=""
                />
                <TeamMember
                  name="Sanskar"
                  imageSrc={user}
                  linkedinLink=""
                  githubLink=""
                />
                <TeamMember
                  name="Vedant"
                  imageSrc={user}
                  linkedinLink=""
                  githubLink=""
                />
                <TeamMember
                  name="Vidit"
                  imageSrc={vidit}
                  linkedinLink="https://in.linkedin.com/in/viditkhazanchi"
                  githubLink="https://github.com/vk0812"
                />
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
                <TeamMember
                  name="Chilyang"
                  imageSrc={user}
                  linkedinLink=""
                  behanceLink=""
                />
                <TeamMember
                  name="Tanmay"
                  imageSrc={tanmay}
                  linkedinLink="https://in.linkedin.com/in/tanmay-jain-a19916143"
                  behanceLink="https://www.behance.net/tanmayjain15"
                />
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
                <TeamMember
                  name="Akkshat"
                  imageSrc={akshat}
                  linkedinLink="https://www.linkedin.com/in/akshat-jain-069822250/"
                  githubLink="https://github.com/akshat1423/"
                />
                <TeamMember
                  name="Aman"
                  imageSrc={user}
                  linkedinLink=""
                  githubLink=""
                />
                <TeamMember
                  name="Amit"
                  imageSrc={amit}
                  linkedinLink="https://www.linkedin.com/in/amit-malakar-983175259"
                  githubLink="https://github.com/amitmalakariitb"
                />
                <TeamMember
                  name="Ananya"
                  imageSrc={ananya}
                  linkedinLink="https://www.linkedin.com/in/ananya-chavadhal-852656252"
                  githubLink="https://github.com/ananyac9"
                />
                <TeamMember
                  name="Asmi"
                  imageSrc={asmi}
                  linkedinLink="https://www.linkedin.com/in/asmi-rangnekar-066b07256"
                  githubLink="https://github.com/AsmiRangnekar"
                />
                <TeamMember
                  name="Chaitanya"
                  imageSrc={chaitanya}
                  linkedinLink="http://www.linkedin.com/in/chaitanya-keshri"
                  githubLink="https://github.com/chaitanyakeshri"
                />
                <TeamMember
                  name="Chinmay"
                  imageSrc={chinmay}
                  linkedinLink="https://www.linkedin.com/in/chinmay-tripurwar"
                  githubLink="https://github.com/Chinoscode111"
                />
                <TeamMember
                  name="Dipayan"
                  imageSrc={dipayan}
                  linkedinLink="https://www.linkedin.com/in/dipayan-d-039015123"
                  githubLink="https://github.com/dd-002"
                />
                <TeamMember
                  name="Hari"
                  imageSrc={hari}
                  linkedinLink="https://www.linkedin.com/in/harigovind-raghunath-024784252"
                  githubLink="https://github.com/HariRags"
                />
                <TeamMember
                  name="Jatin"
                  imageSrc={jatin}
                  linkedinLink="https://www.linkedin.com/in/jatin-singhal-734694246"
                  githubLink="https://github.com/PSYCHNERD2512"
                />
                <TeamMember
                  name="Mahesh"
                  imageSrc={mahesh}
                  linkedinLink="https://www.linkedin.com/in/mahesh-kumar-prajapat-8687a5276"
                  githubLink="https://github.com/kumar-09"
                />
                <TeamMember
                  name="Nivedha"
                  imageSrc={nivedha}
                  linkedinLink="https://www.linkedin.com/in/nivedha-g-2b4244253"
                  githubLink="https://github.com/gl-nivedha"
                />
                <TeamMember
                  name="Omkar"
                  imageSrc={omkar}
                  linkedinLink="https://www.linkedin.com/in/omkar-shirpure"
                  githubLink="https://github.com/SHIRPUREOMKAR"
                />
                <TeamMember
                  name="Parth"
                  imageSrc={parth}
                  linkedinLink="https://www.linkedin.com/in/parth-batwara-24850125b"
                  githubLink="https://github.com/Parth9001"
                />
                <TeamMember
                  name="Saurabh"
                  imageSrc={saurabh}
                  linkedinLink="https://www.linkedin.com/in/srbh001/"
                  githubLink="https://github.com/srbh001"
                />
                <TeamMember
                  name="Shivam"
                  imageSrc={shivam}
                  linkedinLink="https://www.linkedin.com/in/shivam-kumar-925012254"
                  githubLink="http://github.com/ShivamKr326"
                />
                <TeamMember
                  name="Tanishka"
                  imageSrc={tanishka}
                  linkedinLink="https://www.linkedin.com/in/tanishka-kabra-392022283"
                  githubLink="https://github.com/Tanishkakabra"
                />
                <TeamMember
                  name="Tarus"
                  imageSrc={tarus}
                  linkedinLink="http://www.linkedin.com/in/tarus-pande-3209a1282"
                  githubLink="https://github.com/taruspande"
                />
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
                <TeamMember
                  name="Sahil"
                  imageSrc={sahil}
                  linkedinLink="https://www.linkedin.com/in/sahil-chaudhary-097b3226b"
                  behanceLink="https://www.behance.net/sahildesignzz"
                />
                <TeamMember
                  name="Shreekar"
                  imageSrc={user}
                  linkedinLink=""
                  behanceLink=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
