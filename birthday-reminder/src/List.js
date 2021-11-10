import React from 'react'

const List = ({people,setPeople}) => {
    return(
        <React.Fragment>
            {people.map((person)=>{
                const {id,name,age,image}=person
                return(
                    <article key={id} className="person">
                        <img src={image} alt=""/>
                        <div>
                            <h4>{name}</h4>
                            <h3>{age}</h3>
                            <button type="button" onClick={()=>setPeople(people.filter((per)=>per.id!==id))}>Delete</button>
                        </div>
                        

                    </article>
                )
            })}
        </React.Fragment>
    )
}

export default List
