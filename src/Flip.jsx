import React from "react";
import "./Flip.scss";

import logo1 from "./images/narpavi_logo_1.png";
import logo2 from "./images/ranmars_logo.png";
import logo3 from "./images/ibridge_logo.png";
import logo4 from "./images/narpavi_logo_1.png";

const Flip = () => {
  return (
    <div className="services-container">
      <div className="cards-grid">
        
        <div className="profile-card">
          <img src={logo1} className="avatar" alt="logo" />
          <div className="info">
            <span>Narpavi Research Institute</span>
            <p>narpavitech.in</p>
          </div>
          <a href="https://narpavitech.in" target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        </div>

        <div className="profile-card">
          <img src={logo2} className="avatar" alt="logo" />
          <div className="info">
            <span>Ranmars Corp</span>
            <p>ranmars.com</p>
          </div>
          <a href="https://ranmars.com" target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        </div>

        <div className="profile-card">
          <img src={logo4} className="avatar" alt="logo" />
          <div className="info">
            <span>Narpavi Tech Mumbai</span>
            <p>narpavitechmumbai.in</p>
          </div>
          <a href="https://narpavitechmumbai.in" target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        </div>

        <div className="profile-card">
          <img src={logo3} className="avatar" alt="logo" />
          <div className="info">
            <span>iBridge</span>
            <p>ibridge.in</p>
          </div>
          <a href="https://ibridge.in" target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        </div>

      </div>
    </div>
  );
};

export default Flip;
