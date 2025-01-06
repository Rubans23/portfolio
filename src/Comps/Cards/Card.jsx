import React from 'react';

import { useSelector } from 'react-redux'; 
import "./Card.css";

const Card = ({ emoji, heading, detail }) => {
  const mode = useSelector((state) => state.mode.mode); 
  return (
    <div style={mode==="dark" ? {backgroundColor:'white', boxShadow: '0 70px 40px -20px rgba(255, 255, 255, 0.2)' }: {}} className="card" >
      <img style={{width:'8rem'}} src={emoji} alt="card_image" />
      <span style={{color:'black'}}>{heading}</span>
      <span>{detail}</span>

    </div>
  );
};

export default Card;
