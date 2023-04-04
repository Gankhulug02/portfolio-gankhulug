import React from "react";
import style from "../Hero/style.module.scss";
import { Typewriter } from "react-simple-typewriter";
import { motion, MotionConfig } from "framer-motion";
import Particles from "react-particles";
import ParticlesConfig from "../particle/particles-config";
import Arrow from "../arrow/arrow-bottom";

const Hero = () => {
  return (
    <>
      <div id="home" className={style.container}>
        <ParticlesConfig></ParticlesConfig>
        <div className={style.left}>
          <div className="d-flex flex-wrap fs-7">
            <h1>I enjoy&nbsp;</h1>
            <h1 className="text-primary">
              <Typewriter
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={85}
                deleteSpeed={100}
                delaySpeed={1500}
                words={["designing", "tech", "websites", "digital products"]}
              />
            </h1>
          </div>
          <p>
            8+ years of experience in Webflow development. My mission is to
            design and develop a website that you and your audience love.
          </p>
          <button>Get in touch</button>
        </div>
        <div className={style.right}>
          <img src="./images/zurag.png" alt="" />
        </div>
        <Arrow />
      </div>
    </>
  );
};

export default Hero;

{
  /* <div id="home" className={style.container}>
  <div className={style.left}>
    <div className="d-flex fs-7">
      <h1>I enjoy&nbsp;</h1>
      <h1 className="text-success">
        <Typewriter
          words={["designing", "tech", "websites", "digital products"]}
        />
      </h1>
    </div>
    <p>
      8+ years of experience in Webflow development. My mission is to design and
      develop a website that you and your audience love.
    </p>
    <button>Get in touch</button>
  </div>
  <div className={style.right}>
    <img
      src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
      alt=""
    />
  </div>
</div>; */
}

// import { tsParticles } from "https://cdn.jsdelivr.net/npm/tsparticles-engine/+esm";
// import { loadFull } from "https://cdn.jsdelivr.net/npm/tsparticles/+esm";
// import { loadCardsShape } from "https://cdn.jsdelivr.net/npm/tsparticles-shape-cards/+esm";

// async function loadParticles(options) {
//   await loadFull(tsParticles);
//   await loadCardsShape(tsParticles);

//   await tsParticles.load(options);
// }

// const configs = {
//   particles: {
//     number: {
//       value: 200,
//     },
//     reduceDuplicates: true,
//     rotate: {
//       animation: {
//         enable: true,
//         speed: { min: 10, max: 20 },
//       },
//     },
//     tilt: {
//       enable: true,
//       value: {
//         min: 0,
//         max: 360,
//       },
//       animation: {
//         enable: true,
//         speed: { min: 10, max: 20 },
//       },
//     },
//     roll: {
//       darken: {
//         enable: true,
//         value: 25,
//       },
//       enlighten: {
//         enable: true,
//         value: 25,
//       },
//       enable: true,
//       speed: {
//         min: 15,
//         max: 25,
//       },
//     },
//     wobble: {
//       distance: 30,
//       enable: true,
//       speed: {
//         min: -15,
//         max: 15,
//       },
//     },
//     shape: {
//       type: ["spades", "hearts", "diamonds", "clubs"],
//       options: {
//         spades: {
//           particles: {
//             color: {
//               value: "#000000",
//             },
//           },
//         },
//         hearts: {
//           particles: {
//             color: {
//               value: "#ff0000",
//             },
//           },
//         },
//         diamonds: {
//           particles: {
//             color: {
//               value: "#ff0000",
//             },
//           },
//         },
//         clubs: {
//           particles: {
//             color: {
//               value: "#000000",
//             },
//           },
//         },
//       },
//     },
//     opacity: {
//       value: 1,
//     },
//     size: {
//       value: 30,
//     },
//     move: {
//       enable: true,
//       speed: 2,
//       direction: "none",
//     },
//   },
//   background: {
//     color: "#fff",
//   },
// };

// loadParticles(configs);
// export default configs;

// background: {
//   color: "000000", // this sets a background color for the canvas
// },
