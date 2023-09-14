import React, { useState } from 'react'

export const Card = ({id,name,info,price,image,removetour}) => {

    const [readmore,setreadmore] = useState(false)
 
     const desc = readmore ? info : `${info.slice(0,200)}...`
    
   
  return (
    <div>
        <div className='card'>
            <img  className = "image"src={image} alt="tour information"/>
           
       
             
              <h4 className='tour-price'>  {price} </h4>
              <h4 className='tour-name'>  {name} </h4> 
              <div className='tour-description'> {desc} 
             <span className='read-more' onClick={ () => setreadmore (!readmore)}> 
                {
                   readmore ? `see less` : `see more`
                }
             </span>
             </div>

             <button className='btn-red' onClick={()=> removetour(id)}> Not intrested </button> 


            
        </div>

      



    </div>
  )
}
