

import './Style_all.css';
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Cardthree from './Cardthree';



const Allcolection = () => {
  
   
        const [data, setData] = useState([]);
       
      
      
        const lodeData = async () => {
          try {
            const result = await Axios.get("http://localhost:3000/Allcard");
            setData(result.data);
          } catch (error) {
            console.log(error);
          }
        };
      
       
       
      
      
      
        useEffect(() => {
          lodeData();
       
        }, []);
 return (
  <>
   
   <div className="contener ">
        <div className="col-12 w-100 p-3">
          <div className="boxhead bg-light color-dark text-center "> <h2>ALL COLLECTION</h2></div>


        </div></div>

      <div className="col-md-12 m-5">
        <div className="row m-2">
         {/* &&&&&&&&&&&&&&&&&&&&&&&& */}

         <Cardthree data={data} />

        </div></div>


   
   </>
  )
}

export default Allcolection
