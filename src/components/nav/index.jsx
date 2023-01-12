import React from "react";
import style from "./nav.module.css";

let menu = [
  "Home",
  "About",
  "skill",
  "Education",
  "Work",
  "Experience",
  "Contact",
];

const Nav = () => {
  return (
    <div className="container">
      <nav>
        <div className={style.navLeft}>
          <p>Ганхөлөг</p>
        </div>
        <div className={style.navRight}>
          {menu.map((i) => (
            <button>{i}</button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
