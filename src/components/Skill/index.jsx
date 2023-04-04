import React, { Component } from "react";
import Arrow from "../arrow/arrow-bottom";
import Bottom from "./Bottom";
import style from "./style.module.scss";
import Top from "./top";

export default class Skills extends Component {
  render() {
    return (
      <div id="skill" className={style.container}>
        <Top />
        <Bottom />
        <Arrow />
      </div>
    );
  }
}
