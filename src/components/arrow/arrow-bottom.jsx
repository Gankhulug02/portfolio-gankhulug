import React from "react";
import style from "./style.module.css";
import { ChevronCompactDown, ChevronDown } from "react-bootstrap-icons";

const Arrow = () => {
  return (
    <div>
      <ChevronDown className={style.arrow} />
    </div>
  );
};

export default Arrow;
