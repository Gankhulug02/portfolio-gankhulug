import React from "react";
import style from "./style.module.scss";

const Top = () => {
  return (
    <div className={style.container}>
      <h1>SKILLS</h1>
      <p>
        What <span>I</span> Do
      </p>
      <p className={style.line}></p>
    </div>
  );
};

export default Top;
