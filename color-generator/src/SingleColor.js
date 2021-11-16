import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";//transform rgb(array(3)) to a string(#ffffff)

const SingleColor = ({ rgb, weight, index ,colorHex}) => {
  const [alert,setAlert]=useState(false);
  const bcg=rgb.join(',')
  const hex=rgbToHex(...rgb)//#ffffff
  useEffect(()=>{
    let time=setTimeout(() =>{setAlert(false)},3000)
    return ()=>{
      clearTimeout(time)
    }
  },[alert])
  return <article className={`color ${index>10 && 'color-light'}`} 
  style={{backgroundColor:`rgb(${bcg})`}}
  onClick={() =>{
    setAlert(true);
    navigator.clipboard.writeText(hex)
   }}>
    <p className="percent-value">
      {weight}%
    </p>
    <p className="color-value">{`#${colorHex}`}</p>
    {alert && <p className="alert">Copied to clipboard</p>}
  </article>;
};

export default SingleColor;
