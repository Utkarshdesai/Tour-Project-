
import { useState } from "react";
import { Tours } from "./component/Tours";
import data from './data'

const App = () => {

  const [tour , settour] = useState(data)
  
  function removetour (id) 
  {
      const newtour = tour.filter ( (tour) => tour.id !== id )
      settour(newtour)
  }


  return (
    <div>
      {
         tour.length > 0  ?
          
           <Tours tour = {tour}  removetour= {removetour}></Tours> : 
         
           <div className="refresh"> 
            <div> No tour left </div>
            <button  className="btn-white" onClick={()=> settour(data)}> Refresh </button>
           </div>

      }
       
    </div>


  )
};

export default App;
