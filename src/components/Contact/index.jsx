import React from "react";
import style from "./style.module.scss";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  const socialIcon = [
    {
      icon: <SocialIcon network="github" className={style.icon} />,
      href: "https://github.com/Gankhulug02",
    },
    {
      icon: <SocialIcon network="facebook" className={style.icon} />,
      href: "https://www.facebook.com",
    },
    {
      icon: <SocialIcon network="instagram" className={style.icon} />,
      href: "https://www.youtube.com",
    },
  ];
  return (
    <div id="contact" className={style.container}>
      <h1>Let's Talk</h1>
      <div className={style.bottom}>
        <div className={style.left}>
          <div className={style.social}>
            {socialIcon.map((e) => (
              <a href={e.href} target="_blank">
                {e.icon}
              </a>
            ))}
          </div>
        </div>
        <div className={style.right}>
          <div>
            <h5>E-Mail</h5>
            <h6>Huluguu0202@gmail.com</h6>
          </div>
          <div>
            <h5>Phone</h5>
            <h6>88223402</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
