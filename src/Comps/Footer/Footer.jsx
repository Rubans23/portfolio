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
        <span style={{fontSize:'30px'}}>6381024183</span>
        <div className="f-icons">
          <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/rubans23091999/', '_blank', 'noopener,noreferrer')} style={{ width: '2rem', height: '2rem',cursor:'pointer' }} color="white" />
          <FaGithub onClick={() => window.open('https://github.com/Rubans23/', '_blank', 'noopener,noreferrer')} style={{ width: '2rem', height: '2rem' ,cursor:'pointer'}} color="white" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
