import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({title,info}) => {
  const [read,setRead]=useState(true)
  return <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={()=>setRead((prev)=>!prev)}>
            {read ?<AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </header>
      <p>{read ? info:""}</p>
  </article>;
};

export default Question;
