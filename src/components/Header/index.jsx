import React, { useEffect, useState } from "react";
import wiketLogo from "../../assets/images/svg/wiket-logo.svg";
import "./index.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(window.pageYOffset > 150);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset > 150);
      console.log(window.pageYOffset);
    };
  }, []);

  return (
    <div
      className={"navigation flex-justify-between flex-align-center"}
      style={{
        backgroundColor: isScrolled ? "#ffffff" : "",
        transition: "all 0.5s ease-in",
      }}
    >
      <div className="navigation__logo">
        <img src={wiketLogo} alt="wiket_logo" />
      </div>
      <div className="navigation__bar flex-align-center">
        <div className="navigation__bar--hide-mobile">
          <ul>
            <li>Benefits</li>
            <li>Your profile</li>
            <li>Connections</li>
            <li>Plans &#38; Pricing</li>
          </ul>
        </div>
        <div className="navigation__bar--show-mobile flex-align-center flex-justify-center">
          Get started
        </div>
        <div className="navigation__bar--mobile">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
