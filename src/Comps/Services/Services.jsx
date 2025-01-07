import React from 'react';
import "./Services.css";
import Card from '../Cards/Card';
import front from "../../img/front.png";
import back from "../../img/back-end.png";
import api from "../../img/api.png";
import Ruban_CV from "./RubanS_CV.pdf";
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux'; 
import "../../App.css";


function Services() {
    const transition = { duration: 1, type: "spring" };
    const mode = useSelector((state) => state.mode.mode); 
    const cardData = [
        {
            emoji: front,
            heading: 'Front-end',
            detail: 'Developed scalable UI components and collaborated with teams to create high-quality web apps.',
            style: { left: '14rem' },
  
        },
        {
            emoji: back,
            heading: 'Backend',
            detail: 'Implemented server-side rendering for JWT authentication and ensured secure data handling.',
            style: { top: '12rem', left: '-4rem' },
        },
        {
            emoji: api,
            heading: 'API',
            detail: 'Integrated APIs with web applications, facilitating seamless communication between front-end and back-end components.',
            style: { top: '19rem', left: '12rem' },
        },
    ];

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = Ruban_CV;
        link.download = 'RubanS_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id='services' className="services">
            <div className="services-left">
                <span style={mode==="dark" ? {color:'#E2DFD0'}: {}} >My Specialties</span>
                <span>at work</span>
                <span>Expertise in crafting high-performance & scalable web applications
                    <br />
                     using React.js, Redux, and other front-end technologies.  
                    <br />
                    
                    Proven ability to collaborate effectively and 
                    <br />
                    deliver exceptional user experiences. </span>
                <button className='button s-button'  onClick={handleDownloadCV}>Download CV</button>
                <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
            </div>
            <motion.div className="cardslist"
            initial={{ left: '36%' }} 
            whileInView={{ left: '12%' }} 
            transition={transition}
            >
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        style={card.style}
                        
                    >
                        <Card
                            emoji={card.emoji}
                            heading={card.heading}
                            detail={card.detail}
                        />
                    </div>
                ))}
                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>
                <div className="blur s-blur1" style={{ background: 'var(--blueCard)' }}></div>
            </motion.div>
        </div>
    );
}

export default Services;
