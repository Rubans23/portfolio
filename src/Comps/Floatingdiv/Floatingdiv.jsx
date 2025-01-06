import React from 'react'
import "./Floatingdiv.css"
import { useSelector } from 'react-redux'; 
function Floatingdiv({image,txt1,txt2}) {
  const mode = useSelector((state) => state.mode.mode); 
  return (
    <div style={{width:'195px', height:'80px'}} className="floatingdiv">
        <img  src={image} alt="crown" />
        <span style={mode==="dark" ? {color:'#021526',textAlign:'center'}: {textAlign:'center'}}>
            {txt1 }
            <br />
            {txt2}
        </span>
    </div>
  )
}

export default Floatingdiv
