import React from "react";
import style from "./styles.module.scss";
import { motion } from "framer-motion";

const Middle = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h2>
          I`m <span className="text-primary">Gankhulug </span> , a Web Developer
        </h2>
        <p>
          I help you build brand for your business at an affordable price.
          Thousands of clients have procured exceptional results while working
          with our dedicated team. when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <p>
          Delivering work within time and budget which meets client’s
          requirements is our moto. Lorem Ipsum has been the industry's standard
          dummy text ever when an unknown printer took a galley.
        </p>
      </div>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, delay: 45 }}
        className="w-100"
      >
        <div className={style.right}>
          <h5>Name: &nbsp;Urtnasan Gankhulug</h5>
          <h5>
            Email: &nbsp;
            <a href="mailto:huluguu0202@gmail.com" target="blank">
              Huluguu0202@gmail.com
            </a>
          </h5>
          <h5>Age: &nbsp;19</h5>
          <h5>From: &nbsp;Ulaanbaater Mongolia</h5>
        </div>
      </motion.div>
    </div>
  );
};

export default Middle;
