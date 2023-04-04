import React from "react";
import style from "./style.module.scss";

const Bottom = () => {
  const skill = [
    {
      language: "html",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
    },
    {
      language: "SCC",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    },
    {
      language: "js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    },
    {
      language: "rect",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      language: "Bootstrap",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    },
    {
      language: "PY",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      language: "Git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    },
    {
      language: "VS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ];
  return (
    <div className={style.container}>
      {skill.map((i) => (
        <div className={style.item} data-tilt>
          <img src={i.img} alt={i.language} />
          {/* <p>{i.language}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Bottom;
