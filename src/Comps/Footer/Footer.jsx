import React from 'react';
import "./Footer.css";
import Wave from "../../img/wave.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa';


function Footer() {
  return (
    <div className="footer">
      <img src={Wave} style={{ width: '100%' }} alt="wave_image" />
      <div className="f-content">
        <span style={{fontSize:'30px'}}>rubans230999@gmail.com</span>
        <div className="f-icons">
          <FaLinkedin style={{ width: '2rem', height: '2rem' }} color="white" />
          <FaGithub style={{ width: '2rem', height: '2rem' }} color="white" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
