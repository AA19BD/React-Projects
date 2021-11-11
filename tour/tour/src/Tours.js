import React from 'react'
import Tour from './Tour';

const Tours = ({tours,removeTours}) => {
    return (
        <section className="title">
        <h2>Tours</h2>
        <div className="underline">

        </div>
        <div>
        {tours.map((tour) =>{
            return(
                <Tour key={tour.id} {...tour} removeTours={removeTours}/>
            )
        })}

        </div>
        </section>
    )
}

export default Tours
