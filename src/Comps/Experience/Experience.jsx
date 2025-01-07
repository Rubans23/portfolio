import React  from "react";
import "./Experience.css";
import { useSelector } from 'react-redux'; 
const Experience = () => {
  const mode = useSelector((state) => state.mode.mode); 
  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" >3.2+</div>
        <span style={mode==="dark" ? {color:'#E2DFD0'}: {}} >years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" >2+</div>
        <span style={mode==="dark" ? {color:'#E2DFD0'}: {}} >Projects </span>
        <span>Worked</span>
      </div>
      <div className="achievement">
        <div className="circle" >7+</div>
        <span style={mode==="dark" ? {color:'#E2DFD0'}: {}} >Supports </span>
        <span>Modules</span>
      </div>
    </div>
  );
};

export default Experience;
