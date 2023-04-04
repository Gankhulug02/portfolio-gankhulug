import React from "react";

import { Route, Routes } from "react-router-dom";

import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Work from "../components/Work";
import Skills from "../components/Skill";
// import Experience

const Hoem = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Work />
    </>
  );
};

export default Hoem;
