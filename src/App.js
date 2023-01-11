import logo from "./logo.svg";
import "./App.css";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 5 }}
        >
          <SocialIcon network="youtube" className="App-logo" />
          <SocialIcon network="facebook" className="App-logo" />
          <SocialIcon network="twitter" className="App-logo" />
          <SocialIcon network="instagram" className="App-logo" />
        </motion.div>
        <Typewriter words={["Pinecone", "Work", "Smart"]} />
        <motion.div layout />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
