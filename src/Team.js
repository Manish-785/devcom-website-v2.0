import React from "react";
import "./Team.css";

function Team() {
  return (
    <div className="container team-container">
      <div className="row team-section-head">
        <div className="col-2 team">
          <p className="teams">Team</p>
        </div>
        <div className="col-9 blank"></div>
        <div className="col-1 team-desc-button-box">
          <button className="team-desc-button">Know the team</button>
        </div>
      </div>
      <div className="row team-section-body"></div>
    </div>
  );
}

export default Team;
