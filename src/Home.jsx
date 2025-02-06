

import './Style_all.css';
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Cardone from './Cardone';
import { NavLink } from 'react-router-dom'

import Cardtwo from './Cardtwo';
import Cardthree from './Cardthree';



const Home = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);


  const lodeData = async () => {
    try {
      const result = await Axios.get("http://localhost:3000/card1");
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const lodeData2 = async () => {
    try {
      const result2 = await Axios.get("http://localhost:3000/card2");
      setData2(result2.data); // Fixed: Updating the correct state
    } catch (error) {
      console.log(error);
    }
  };
  const lodeData3 = async () => {
    try {
      const result3 = await Axios.get("http://localhost:3000/card3");
      setData3(result3.data); // Fixed: Updating the correct state
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    lodeData();
    lodeData2();
    lodeData3();
  }, []);

  // ***********************************************************************
  return (
    <>

<div className="container-fluid mt-3">
  <div className="row">
    <div className="col-12 youtubebox d-flex flex-column flex-md-row">
      <div className="col-12 col-md-6 pe-md-1 mb-3 mb-md-0">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/OcH1t_fzlxo?si=8TpUM5oUmSKaurxS"
            title="YouTube video player"
            allow="accelerometer; play; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="col-12 col-md-6 ps-md-1">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/64wJHvwuFPQ?si=J09QExhCbKOeptY-"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* ************************* */}
      <div className="contener-fluid">


        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
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


      {/* *********************** */}

      <div className="contener firebox">
        <img src="Images/almostgodsgifbanner-ezgif.com-cut.webp" alt="" /></div>

      {/* **************************** */}

      <div className="col-12">
        <div id="carouselExample1" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="Images/G-SHOCK/10269.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="Images/G-SHOCK/10270.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="Images/G-SHOCK/10271.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="Images/G-SHOCK/10272.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>



      {/* ********************************************************** */}

      <div className="contener ">
        <div className="col-12">

          <div className="col-12 firebox"><img src="Images/G-SHOCK/10147.jpg" alt="" /></div>

          <div className="col-12 firebox"><img src="Images/G-SHOCK/10143.jpeg" alt="" /></div>

        </div>
      </div>
      {/* ********************************************* */}


      <div className="contener ">
        <div className="col-12 w-100 p-3">
          <div className="boxhead bg-light color-dark text-center "> <h2>New Drops</h2></div>


        </div></div>

      <div className="col-md-12 cards">
        <div className="row">
         {/* &&&&&&&&&&&&&&&&&&&&&&&& */}

         <Cardone data={data} />

        </div></div>

      <div className="buttonbox d-flex justify-content-center text-body-tertiary ">
       <NavLink  to={"BestSeller"}>  <button type="button"  class="btn btn-secondary bg-dark btn-sm rounded-0 " >VIEW ALL COLLECTION</button> </NavLink>
      </div>



      {/* ************************************************** */}


      <div className="contener ">
        <div className="col-12 w-100 p-3">
          <div className="boxhead bg-light color-dark text-center mx-2 "> <h2>About G-SHOCK</h2></div>


        </div></div>

      <div className="col-md-12 cards ">
        <div className="row ">


          <Cardtwo data={data2}/>
       
        </div></div>


      {/* ************************************************** */}


      <div className="contener1 ">
        <div className="col-12 ">
          <div className="boxhead bg-light color-dark text-center mx-2 "> <h2>What's New?</h2></div>


        </div></div>

      <div className="col-md-12 cards my-3 ">
        <div className="row mx-2 ">

          <Cardthree data={data3}/>
        
        </div></div>
      <div className="buttonbox d-flex justify-content-center text-body-tertiary  ">
       <NavLink to={"Allcolection"}> 
        <button type="button" class="  btn btn-secondary rounded-0  btn-sm ">VIEW ALL COLLECTION</button></NavLink>
      </div>



    </>
  )
}

export default Home;
