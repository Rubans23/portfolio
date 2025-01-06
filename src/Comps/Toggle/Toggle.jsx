import React from 'react'
import "./Toggle.css"
import { FaSun, FaMoon } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'; 
import { toggleMode } from '../../Store/action';
function Toggle() {
  const mode = useSelector((state) => state.mode.mode); 
  const dispatch = useDispatch(); 
  const handleClick = () => { dispatch(toggleMode()); };
  return (

 
      <div>
        
        <div className="toggle" onClick={handleClick}>
        <FaSun color="#FFA500" style={{ width : "1rem" }}  /> 
        <FaMoon color="FFA500" style={{ width : "1rem" }} />
      <div
        className="t-button"
        style={mode==="dark" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
      </div>


    

  )
}

export default Toggle
