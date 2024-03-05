import React from "react";
import { useNavigate } from "react-router";
import "./style/navbar.css";
const Navbar = () => {
  let nav = useNavigate();

  function about() {
    nav("/");
  }

  function skills() {
    nav("/skills");
  }

  function projects() {
    nav("/project");
  }

  return (
    <div className="navbar">
      <div className="box1">
        <div className="box">
          <button onClick={about}>About</button>
          <button onClick={skills}>Skills</button>
          <button onClick={projects}>Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
