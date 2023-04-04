import React from "react";
import style from "./style.module.css";
import { motion, MotionConfig } from "framer-motion";
// import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";

let menu = [
  { name: "home", href: "" },
  { name: "about", href: "About" },
  // { name: "skill", href: "skill" },
  { name: "education", href: "education" },
  // { name: "work", href: "work" },
  // { name: "experience", href: "experience" },
  { name: "contact", href: "contact" },
];

const Navbar = () => {
  // window.addEventListener("scroll", () => {
  //   const scrollable =
  //     document.documentElement.scrollHeight - window.innerHeight;
  //   const scrolled = window.scrollY;

  //   let nav = document.querySelector("nav");

  //   if (Math.floor(scrolled) >= 300) {
  //     nav.classList.remove("container");
  //     nav.classList.add("asd");
  //     console.log("asd");
  //   } else {
  //     nav.classList.remove("asd");
  //   }
  //   console.log(Math.floor(scrolled));
  // });
  return (
    <div className={style.container}>
      {/* <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      > */}
      <nav>
        <div className={style.navLeft}>
          {/* <img
              src="https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539__340.png"
              alt=""
            /> */}
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Ганхөлөг
          </Link>
        </div>
        <div className={style.navRight}>
          {menu.map((i) => (
            // <Nav.Link className={style.active} href={`/${i.href}`}>
            <Link className={style.active} to={`#${i.href}`}>
              <button>.{i.name}</button>
            </Link>
            // </Nav.Link>
          ))}
        </div>
      </nav>
      {/* </motion.div> */}
    </div>
  );
};

export default Navbar;
