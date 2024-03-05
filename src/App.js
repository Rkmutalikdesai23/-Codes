import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import About from "./comp/About";
import Project from "./comp/Projects";
import Skills from "./comp/Skills";
import Navbar from "./navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
