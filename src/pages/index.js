import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import useOnScreen from "../helper/intersectionObserver";

import "./index.scss";
import floristImg from "../assets/images/jpg/header-img-florist.jpg";
import potteryImg from "../assets/images/jpg/header-img-pottery.jpg";
import gardenerImg from "../assets/images/jpg/header-img-gardener.jpg";
import baristaImg from "../assets/images/jpg/header-img-barista.jpg";
import pin1Img from "../assets/images/svg/pin-01.svg";
import pin2Img from "../assets/images/svg/pin-02.svg";
import headerLineDesktop from "../assets/images/svg/header-line-desktop.svg";
import headerLinePhone from "../assets/images/svg/header-line-phone-portrait.svg";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const ref = useRef();
  const onScreen = useOnScreen(ref);
  const control = useAnimation();

  const contentLeftMainCard = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: screenSize > 768 ? 0.5 : 1,
        delayChildren: 0.3,
        delay: screenSize > 768 ? 0 : 0.5,
      },
    },
  };
  const contentLeftCard1 = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: screenSize > 768 ? 0.5 : 1,
      },
    },
  };
  const contentLeftCard2 = {
    hidden: { opacity: 0, y: 70 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: screenSize > 768 ? 0.5 : 0,
      },
    },
  };
  const contentLeftCard3 = {
    hidden: { opacity: 0, y: 90 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: screenSize > 768 ? 0.7 : 0,
      },
    },
  };

  const contentRightTop = {
    hidden: {
      opacity: 0,
      scale: screenSize > 768 ? 0.99 : 1,
      y: screenSize > 768 ? 0 : 70,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: screenSize > 768 ? 1 : 0,
      },
    },
  };

  const contentRightBottom = {
    hidden: {
      opacity: 0,
      y: screenSize > 768 ? 0 : 70,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: screenSize > 768 ? 2 : 0.5,
      },
    },
  };

  const contentRest = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 2,
      },
    },
  };

  useEffect(() => {
    window.onresize = () => {
      setScreenSize(window.innerWidth);
    };
    if (onScreen) {
      control.start("show");
    }
    if (!onScreen) {
      control.start("hidden");
    }
  });

  return (
    <div className="content">
      <div className="content__right">
        <motion.div variants={contentRightTop} initial="hidden" animate="show">
          <div className="top">
            <p className="content__right--subtitle">
              Explore new opportunities
            </p>
            <h1 className="content__right--title">
              <span>Grow</span> your business.
            </h1>
          </div>
        </motion.div>

        <motion.div
          variants={contentRightBottom}
          initial="hidden"
          animate="show"
        >
          <div className="bottom">
            <p className="content__right--desc">
              <strong>Wiket is the first business to business network </strong>
              which lets you connect to mind like people
            </p>
          </div>
        </motion.div>
      </div>
      <div className="content__left">
        <motion.ul
          variants={contentLeftMainCard}
          initial="hidden"
          animate="show"
          style={{ listStyle: "none" }}
        >
          <div className="content__left--main-card">
            <motion.div variants={contentRest}>
              <div className="desktop-view-bg-img">
                <motion.div
                  animate={{
                    y: 10,
                  }}
                  transition={{
                    repeat: 10,
                    repeatType: "reverse",
                    duration: 3,
                    delay: 2,
                  }}
                >
                  <img src={pin1Img} alt="pin1" className="pin1" />
                  <img src={pin2Img} alt="pin2" className="pin2" />
                </motion.div>
                <img
                  src={headerLineDesktop}
                  alt="header-line"
                  className="line-img"
                />
              </div>
            </motion.div>
            <div className="mobile-view-bg-img">
              <img
                src={headerLinePhone}
                alt="line-img-mobile"
                className="mobile-line-img"
              />
            </div>

            <img src={floristImg} alt="floristImg" className="main-img" />
            <div className="text-box">
              <p className="title">Hanging Garden</p>
              <p className="place">Florist in Bangkok</p>
            </div>

            <motion.li
              variants={contentLeftCard1}
              initial="hidden"
              animate={control}
              className="content__left--card-1"
              ref={ref}
            >
              <img src={potteryImg} alt="floristImg" />
              <div className="text-box">
                <p className="title">Potject</p>
                <p className="place">Pottery in Bangkok</p>
              </div>
            </motion.li>

            <motion.li
              variants={contentLeftCard2}
              initial="hidden"
              animate={control}
              className="content__left--card-2"
              ref={ref}
            >
              <img src={gardenerImg} alt="floristImg" />
              <div className="text-box">
                <p className="title">GreenThumb</p>
                <p className="place">Gardener in CheChe</p>
              </div>
            </motion.li>

            <motion.li
              variants={contentLeftCard3}
              initial="hidden"
              animate={control}
              className="content__left--card-3"
              ref={ref}
            >
              <img src={baristaImg} alt="floristImg" />
              <div className="text-box">
                <p className="title">Green Cafe</p>
                <p className="place">Cafe in Bangkok</p>
              </div>
            </motion.li>
          </div>
        </motion.ul>
      </div>
    </div>
  );
}

export default App;
