import './Style_all.css';
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Cardone from './Cardone';
import Cardthree from './Cardthree';

const Newdrops = () => {

    const [newdropcard1, setData] = useState([]);
    const [newdropmaincard, setData2] = useState([]);


    
  const lodeData = async () => {
    try {
      const result = await Axios.get("http://localhost:3000/newdropcard1");
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

     
  const lodeData2 = async () => {
    try {
      const result = await Axios.get("http://localhost:3000/newdropmaincard");
      setData2(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    lodeData();
    lodeData2();
 
  }, []);


  return (
   <>

<div className="container-fluid box12 ">
        <div className="row ">

          <div className="col-md-12 px-5  ">
            <div className="row  bg-dark text-light ">


              <div className="col-md-3 justify-content-start     m-3      ">
                <img style={{height:'50px',width:'100px'} }src="Images/casiologo.svg" alt="" />
              </div>


              <div className="col-md-7 d-flex justify-content-end align-items-center">
                <div className="mx-3 fw-semibold">
                  <p>G-SHOCK Brand Site</p>
                </div>
                <div className="mx-3 fw-semibold">
                  <p>Store Search</p>
                </div>
                <div className="mx-3 fw-semibold">
                  <p>Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   <div className="contener-fluid">


<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
  <div className="carousel-item active">
      <img src="Images/casio-homepage-1.avif" class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item active">
      <img src="Images/casio-homepage-1.avif" class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item active">
      <img src="Images/casio-homepage-1.avif" class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="Images/vk-casio-homepage-2.avif" class="d-block w-100" alt="..." />
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div></div>



{/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}

<div className="contener firebox">
        <img src="Images/almostgodsgifbanner-ezgif.com-cut.webp" alt="" /></div>
        <hr />

        <div className="container-fluid">
        <div className="row">
          <div className="col-md-12   px-4 pt-2">
            <ul className="d-flex list-unstyled">
              <li className="mx-2">All</li>
              <li className="mx-2">BEST SELLERS</li>
              <li className="mx-2">New Drops</li>
              <li className="mx-2">FULL METAL</li>
              <li className="mx-2">G-STEEL</li>
              <li className="mx-2">MT-G</li>
              <li className="mx-2">G-SQUAD</li>
              <li className="mx-2">MASTER OF G</li>
              <li className="mx-2">ANALOG-DIGITAL</li>
              <li className="mx-2">DIGITAL</li>
              <li className="mx-2">LIMITED</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="col-md-12 cards ">
        <div className="row ">

          <Cardthree data={newdropcard1}/>
        
        </div></div>


        {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}

<div className="container-fluid">


    <h2 className='mb-5 mt-3 mx-3'>New Drops - G-SHOCK</h2>
        </div>


        <div className="col-md-12 ">
        <div className="row">
         {/* &&&&&&&&&&&&&&&&&&&&&&&& */}

         <Cardone data={newdropmaincard} />

        </div></div>


   
   </>
  )
}

export default Newdrops
