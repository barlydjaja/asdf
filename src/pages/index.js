import React from 'react';
import "./index.scss"
import floristImg from "../assets/images/jpg/header-img-florist.jpg"
import potteryImg from "../assets/images/jpg/header-img-pottery.jpg"
import gardenerImg from "../assets/images/jpg/header-img-gardener.jpg"
import baristaImg from "../assets/images/jpg/header-img-barista.jpg"
import pin1Img from "../assets/images/svg/pin-01.svg"
import pin2Img from "../assets/images/svg/pin-02.svg"
import headerLineDesktop from "../assets/images/svg/header-line-desktop.svg"
import headerLinePhone from "../assets/images/svg/header-line-phone-portrait.svg"

function App() {
  return (
    <div className="content">
      <div className="content__right">
        <div className="top">
          <p className="content__right--subtitle">Explore new opportunities </p>
          <h1 className="content__right--title"><span>Grow</span> your business</h1>
        </div>
        <div className="bottom">
          <p className="content__right--desc">
            <strong>Wiket is the first business to business network</strong> which lets you connect to mind like people
          </p>
        </div>
      </div>
      <div className="content__left">
        <div className="content__left--main-card">
          <img src={pin1Img} alt="pin1" className="pin1"/>
          <img src={pin2Img} alt="pin2" className="pin2"/>
          <img src={headerLineDesktop} alt="header-line" className="line-img"/>

          <img src={floristImg} alt="floristImg" className="main-img"/>
          <div className="text-box">
            <p className="title">Hanging Garden</p>
            <p className="place">Florist in Bangkok</p>
          </div>

          <div className="content__left--card-1">
            <img src={potteryImg} alt="floristImg" />
            <div className="text-box">
              <p className="title">Potject</p>
              <p className="place">Pottery in Bangkok</p>
            </div>
          </div>

          <div className="content__left--card-2">
            <img src={gardenerImg} alt="floristImg" />
            <div className="text-box">
              <p className="title">GreenThumb</p>
              <p className="place">Gardener in CheChe</p>
            </div>
          </div>

          <div className="content__left--card-3">
            <img src={baristaImg} alt="floristImg" />
            <div className="text-box">
              <p className="title">Green Cafe</p>
              <p className="place">Cafe in Bangkok</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
