import React from 'react';
import "./Works.css";
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux'; 
import { DiReact, DiJavascript1, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';
function Works() {
  const transition = {duration : 2, type :'spring'}
  const mode = useSelector((state) => state.mode.mode); 
  const scrollToSection = (sectionId) => { 
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth' }); 
    };
  return (
    <div id='works' className="works">
      <div className="services-left">
        <span style={mode==="dark" ? {color:'#E2DFD0'}: {}} >Technologies and</span>
        <span>frameworks I've used</span>
        
        <span style={mode==="dark" ? {color:'#E2E2B6'}: {}}>I specialize in designing and developing scalable,  component-based 
          <br />
          UI architectures using ReactJS, Redux, and various frontend technologies.
          <br />
          I have a strong background in API integration, state management, testing, and
          <br />
          collaborating with cross-functional teams to deliver high-quality web applications.
        </span>
        <button onClick={() => scrollToSection('contact')} className='button s-button'>Hire me</button>
        <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
      </div>
      <div style={{marginLeft:'-3rem'}} className="w-right">
        <motion.div
          initial = {{rotate:45}}
          whileInView={{rotate:0}}
          transition={transition}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
          <DiJavascript1 style={{ width: '3rem', height: '3rem' }} color="021526" />
          </div>
          <div className="w-secCircle">
          <SiRedux style={{ width: '3rem', height: '3rem' }} color="021526" />
          </div>
          <div className="w-secCircle ">
          <DiReact className='rotate_logo' style={{ width: '5rem', height: '5rem' }} color="61dbfb" />
          </div>
          <div className="w-secCircle">
          <DiHtml5 style={{ width: '3rem', height: '3rem' }} color="021526" />
          </div>
          <div className="w-secCircle">
          <DiCss3 style={{ width: '3rem', height: '3rem' }} color="021526" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;