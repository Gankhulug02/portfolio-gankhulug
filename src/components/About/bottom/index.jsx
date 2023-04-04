import React from "react";
import style from "./style.module.scss";

const Bottom = () => {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <h1>1+</h1>
        <p>Year Experience</p>
      </div>
      <div className={style.item}>
        <h1>20+</h1>
        <p>Happy Cilents</p>
      </div>
      <div className={style.item}>
        <h1>200+</h1>
        <p>Project Done</p>
      </div>
      <div className={style.item}>
        <h1>22</h1>
        <p>Get Awards</p>
      </div>
    </div>
  );
};

export default Bottom;
