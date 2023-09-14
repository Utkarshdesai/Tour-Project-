import React from 'react'
import { Card } from './Card'


export const Tours = ({tour ,removetour}) => {
  console.log(tour)
  return (
    <div className='container'>
  
       <div>
         <h2 className='title'> Plan with Tour </h2>
       </div> 

        <div className='cards'> 
          {
            tour.map( (item)=> {
               return <div  key={item.id}> <Card {...item}  removetour = {removetour}/>  </div>
            })
          }

        </div>


    

    </div>
  )
}
