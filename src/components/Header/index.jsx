import React from 'react';
import wiketLogo from "../../assets/images/svg/wiket-logo.svg"
import "./index.scss"

const Header = () => {
    return (
        <div className="navigation flex-justify-between flex-align-center">
            <div className="navigation__logo">
                <img src={wiketLogo} alt="wiket_logo"/>
            </div>
            <div className="navigation__bar">
                <div className="navigation__bar--hide-mobile">
                    <ul>
                        <li>Benefits</li>
                        <li>Your profile</li>
                        <li>Connections</li>
                        <li>Plans &#38; Pricing</li>
                    </ul>
                </div>
                <div className="navigation__bar--show-mobile">
                    Get started
                </div>
            </div>
        </div>
     );
}

export default Header;
