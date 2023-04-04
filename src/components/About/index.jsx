import React from "react";
import style from "./style.module.scss";
import Arrow from "../arrow/arrow-bottom";
import Middle from "./middle";
import Bottom from "./bottom";
import Video from "./video";

const About = () => {
  return (
    <div id="about" className={style.container}>
      <div className={style.top}>
        <h1>ABOUT ME</h1>
        <p>
          Know <span>Me</span> More
        </p>
      </div>
      <Video />
      <Middle />
      <Bottom />
      <Arrow />
    </div>
  );
};
export default About;
