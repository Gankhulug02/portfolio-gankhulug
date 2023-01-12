import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/nav/index";
import Header from "./components/header/index";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App body ">
      <Nav />
      <Header />
    </div>
  );
}

export default App;
