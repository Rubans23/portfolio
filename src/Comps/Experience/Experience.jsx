import React  from "react";
import "./Experience.css";
const Experience = () => {
  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" >3.2+</div>
        <span  >years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" >2+</div>
        <span  >Projects </span>
        <span>Worked</span>
      </div>
      <div className="achievement">
        <div className="circle" >7+</div>
        <span  >Supports </span>
        <span>Modules</span>
      </div>
    </div>
  );
};

export default Experience;
