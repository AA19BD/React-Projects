import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const fetchTours = async () => {
    setLoading(true); //by default
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if(tours.length===0){
    return  <main>
        <section className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={()=>fetchTours()}>Refresh</button>
        </section> 
      </main> 
  }
   
  return (
    <main>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
};

export default App;
