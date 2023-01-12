import React from "react";
import style from "./style.module.css";
import { motion, MotionConfig } from "framer-motion";
import Nav from "react-bootstrap/Nav";

let menu = [
  "home",
  "about",
  "skill",
  "education",
  "work",
  "experience",
  "contact",
];

const Navbar = () => {
  return (
    <div className={style.container}>
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
      >
        <nav>
          <div className={style.navLeft}>
            {/* <img
              src="https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539__340.png"
              alt=""
            /> */}
            <p>Ганхөлөг</p>
          </div>
          <div className={style.navRight}>
            {menu.map((i) => (
              <Nav.Link href={`#${i}`}>{i}</Nav.Link>
            ))}
          </div>
        </nav>
      </motion.div>
    </div>
  );
};

export default Navbar;
