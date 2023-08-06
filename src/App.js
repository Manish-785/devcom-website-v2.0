import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import OurTeam from "./OurTeam";
import Projectreso from "./Projectreso";
import Projectinsti from "./Projectinsti";
import Projectmessi from "./Projectmessi";
import Projectnewbee from "./Projectnewbee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/resobin" element={<Projectreso />} />
          <Route path="/instiapp" element={<Projectinsti />} />
          <Route path="/messi" element={<Projectmessi />} />
          <Route path="/newbee" element={<Projectnewbee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
