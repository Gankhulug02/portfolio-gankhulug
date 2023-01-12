import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/nav/index";
import Hero from "./components/Hero/index";
import About from "./components/About/index";
import Skill from "./components/Skill/index";
import Education from "./components/Education/index";
import Work from "./components/Work/index";
import Experience from "./components/Experience/index";
import Contact from "./components/Contact/index";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App body container">
      <Nav />
      <Hero />
      <About />
      <Skill />
      <Education />
      <Work />
      <Experience />
      <Contact />
      {/* <About /> */}
    </div>
  );
}

export default App;
