import React from 'react';
import "./Intro.css";
import Github from "../../img/github.png";
import Insta from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/light-bulb.png";
import Glass from "../../img/code.png";
import Crown from "../../img/react.png";
import Floatingdiv from "../Floatingdiv/Floatingdiv";
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux'; 
function Intro() {


  
  const mode = useSelector((state) => state.mode.mode);  
  const transition = {duration : 2, type :'spring'}
  const scrollToSection = (sectionId) => { 
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth' 
    }); 
};
  return (
    <div id='intro' className="intro">
      <div className="i-left">
        <div  className="i-name">
          <span style={mode==="dark" ? {color:'#E2DFD0'}: {}} >Hy ! I Am </span>
          <span >Ruban S</span>
          <span style={mode==="dark" ? {color:'#E2E2B6'}: {}} >Experienced React Developer with 3.2+ years in React and JavaScript. Skilled in designing secure, maintainable client-side apps, API development, and automated testing. Up-to-date with front-end trends and best practices. Strong mentor for junior developers.</span>
        </div>
        <button onClick={() => scrollToSection('contact')} className='i-button button'>Hire me</button>
        <div className="i-social-media">
          <a href='www.google.com'><img src={Github} alt="github" /></a>
          <a href='www.google.com'><img src={Insta} alt="instagram" /></a>
          <a href='www.google.com'><img src={Linkedin} alt="linkedin" /></a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={Boy} alt="ai_generated_photo" />
        <motion.img 
        className='codeimage'
        initial = {{left: "-30%"}}
        whileInView={{left:"-38%"}}
        transition={transition}
        
        src={Glass} alt="codeimage" />
        <motion.div 
        initial = {{top: "-4%",left : "60%"}}
        whileInView={{left:"68%"}}
        transition={transition}
        className='hide' style={{ top: '-4%', left: '66%' }}>
          <Floatingdiv image={Thumbup} txt1='Critical' txt2='Thinking' />
        </motion.div>
        <motion.div 
        initial = {{top: "18.7rem",left : "5rem"}}
        whileInView={{left:"0rem"}}
        transition={transition}
        className='' style={{ top: '18rem', left: '0rem' }}>
          <Floatingdiv image={Crown} txt1='Web' txt2='Developer' />
        </motion.div>
        <div className='blur' style={{background:'rgb(238 210 255)' }}></div>
        <div className='blur' style={{background:'#C1F5FF', top:'17rem', width:'21rem', height:'11rem', left:'-9rem' }}></div>
      </div>
    </div>
  );
}

export default Intro;
