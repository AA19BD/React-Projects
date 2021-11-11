import React from 'react'

const Tour = ({id,name,info,image,price,removeTours}) => {
    const[readMore,setReadMore]=React.useState(false)
    return (
        <article className="single-tour">
            
            <img src={image} alt={name}/>

            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">{price}</h4>
                </div>
                <p>{readMore ?info:`${info.substring(0,200)}...`}
                <button onClick={()=>setReadMore((prev)=>!prev)}>{readMore? "Show Less":"Read More"}</button>
                </p>
                <button className="delete-btn" onClick={()=>removeTours(id)}>Delete</button>
            </footer>
        </article>
    )
}

export default Tour
