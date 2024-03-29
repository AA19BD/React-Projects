import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks,setShowLinks]=useState(false)
  const linksContainerRef=useRef(null)//for div
  const linksRef=useRef(null)//for ul

  useEffect(() => {//here we adjusting the height for the container using ref()
    const linksHeight=linksRef.current.getBoundingClientRect().height
    console.log(linksHeight)
    if(showLinks){
      linksContainerRef.current.style.height=`${linksHeight}px`
    }else{
      linksContainerRef.current.style.height='0px'
    }
  },[showLinks])


  return <nav>
    <div className="nav-center">
    <div className="nav-header">
      <img src={logo} alt="Logo" />
      <button className="nav-toggle" 
      onClick={()=>setShowLinks((prev)=>!prev)}>
      <FaBars/>
      </button>

    </div> 
      <div className='links-container' ref={linksContainerRef}>
      <ul className="links" ref={linksRef}>
        {links.map((data)=>{
          const {id,url,text}=data
          return(
            <li key={id}><a href={url}>{text}</a></li>
          )
        })}
      </ul>
      </div>
  
   
    <ul className="social-icons">
      {social.map((data)=>{
        const {id,icon,url}=data
        return(
          <li key={id}><a href={url}>{icon}</a></li>
        )
      })}
    </ul> 
    </div>
  </nav>;
};

export default Navbar;
