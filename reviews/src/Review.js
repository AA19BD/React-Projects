import React from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = React.useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber=(number)=>{
      if(number>people.length-1){
        return 0
      }
      if(number<0){
        return people.length-1
      }
    return number
  }
  const randomNumber=()=>{
      let personNumber=Math.floor(Math.random()*people.length)
      if(personNumber===index){
        personNumber=index+1
      }
      
      setIndex(checkNumber(personNumber))
      console.log(checkNumber(personNumber))
      
  }
  return <article className="review">
      <div className="img-container">
          <img src={image} alt={name} className="person-img"/>
          <span className="quote-icon">
            <FaQuoteRight/>
          </span>
      </div>
      <h4 className="author">
          {name}
      </h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
          <button className="prev-btn" onClick={() =>setIndex((prev)=>checkNumber((prev-1)))}>
              <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={() =>setIndex((prev)=>checkNumber((prev+1)))}>
              <FaChevronRight/>
          </button>  
      </div>
      <button className="random-btn" onClick={randomNumber}>
              Random
          </button>
  </article>;
};

export default Review;
