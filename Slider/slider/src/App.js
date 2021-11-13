import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lasIndex=people.length-1;
    if(index<0){
      setIndex(lasIndex)
    }
    if(index>lasIndex){
      setIndex(0)
    }
  },[index,people])
  useEffect(() => {
    let slider=setInterval(()=>{
      setIndex((prev)=>prev+1)
    },3000)
    return()=>{
      clearInterval(slider)
    }
  },[index])
  return <section className="section">
    <div className="title">
      <h2>
        <span> /</span>Reviews
      </h2>
    </div>
    <div className="section-center">
      {people.map((person,personIndex) =>{
        const {id,image,title,name,quote}=person
        let position="nextSlide"
        if(personIndex===index){
          position="activeSlide"
        }
        if(personIndex===index-1 || (index===0 && personIndex===people.length-1 )){
          position="lastIndex"
        }
        return(
           <article key={id} className={position}>
             <img src={image} alt="name" className="person-img"/>
             <h2>{name}</h2>
             <p className="title">{title}</p>
             <p className="text">{quote}</p>
             <FaQuoteRight className="icon"/>
           </article>

        )
      })}
      <button className="prev" onClick={()=>setIndex((prev)=>prev-1)}><FiChevronLeft /></button>
      <button className="next" onClick={()=>setIndex((prev)=>prev+1)}><FiChevronRight/></button>
    </div>
  </section>;
}

export default App;
