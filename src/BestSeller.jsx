
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './Style_all.css';
import Cardone from "./Cardone";

const BestSeller = () => {

      const [cardbestceller, setData] = useState([]);
     
  
      const lodeData = async () => {
          try {
              const result = await Axios.get("http://localhost:3000/cardbestceller");
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
      <div className="container-fluid box12 mt-5 ">
        <div className="row ">

          <div className="col-md-12 px-5 mx-auto ">
            <div className="row  ">


              <div className="col-md-3 justify-content-start">
                <h4>G-SHOCK - BESTSELLERS</h4>
              </div>


              <div className="col-md-8 d-flex justify-content-end align-items-center">
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

      {/* *************************************** */}

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

      {/* (**************************************************) */}
      <div className="container-fluid">
        <div className="col-md-12">
          <div className="row">

            <div className="boxleftside col-md-2   mt-5">

              <div className="box"> <div className="headbox">sort</div>
                <div className=" my-3">
                  <div className="col-10 ">
                    <label htmlFor="" className=""><input type="radio" />
                    <span className=" mx-2">Newest</span></label>

                  </div>
                  <div className="col-10 my-1">
                    <label htmlFor=""><input type="radio" className="" />
                    <span className=" mx-2">Price:High-Low</span></label>

                  </div>
                  <div className="col-10  my-1">
                    <label htmlFor=""><input type="radio" />
                    <span className="   mx-2 ">Price:Low-High</span></label>

                  </div>
                  <div className="col-10  my-1">
                    <label htmlFor=""><input type="radio" />
                    <span className="   mx-2">
                    Weight:Heavy-Light</span></label>

                  </div> <div className="col-10  my-1">
                    <label htmlFor=""><input type="radio" />
                    <span className="   mx-2">Weight:Light-Heavy</span></label>

                  </div>
                </div>
              </div>
              <div className="box"> <div className="headbox ">prise Range</div>
                <div className="  my-3">
                <div className="col-10 ">
                    <label htmlFor="" className=""><input type="Checkbox" />
                    <span className="   mx-2">  Below ₹5000</span></label>

                  </div>
                  <div className="col-10  my-1 ">
                    <label htmlFor="" className=""><input type="Checkbox" />
                    <span className="   mx-2">₹5000 - ₹10000</span></label>

                  </div>
                  <div className="col-10  my-1">
                    <label htmlFor=""><input type="Checkbox" className="" />
                    <span className="   mx-2">₹10000 - ₹20000</span></label>

                  </div>
                  <div className="col-10  my-1">
                    <label htmlFor=""><input type="Checkbox" />
                    <span className="   mx-2 ">₹20000 - ₹30000</span></label>

                  </div>
                  <div className="col-10  my-1">
                    <label htmlFor=""><input type="Checkbox" />
                    <span className="   mx-2">₹30000 - ₹40000
                    </span></label>

                  </div>
                  <div className="col-10  my-1">
                    <label htmlFor=""><input type="Checkbox" />
                    <span className="   mx-2">₹40000 - ₹50000</span></label>

                  </div>
                  <div className="col-10  my-1">
                    <label htmlFor=""><input type="Checkbox" />
                    <span className="   mx-2">Above ₹50000</span></label>

                  </div>
                </div>

              </div>

              <div className="box"> <div className="headbox ">Display Type</div>
                <button type="button" class=" m-1 mt-2 btn btn-secondary">Digital </button>
                <button type="button" class=" m-1 btn btn-secondary">Analog</button><br />
                <button type="button" class=" m-1 mb-2 btn btn-secondary">Digital and analog</button>

              </div>

              <div className="box"> <div className=" headbox">Display Type</div>
                    
              <div className="box2  my-3">

                <button type="button" class=" my-1 btn btn-secondary mt-3">Water resistance</button>
                <button type="button" class=" my-1 btn btn-secondary">Smartphone Link</button>
                <button type="button" class=" my-1 btn btn-secondary">Tide graph</button>
                <button type="button" class=" my-1 btn btn-secondary">Hand home position correction </button>
                <button type="button" class=" my-1 btn btn-secondary">Moon data</button>

              </div></div>



              <div className="box col-12  "> <div className="headbox ">color</div>
           <div className="box2 d-flex-rape row my-3">
           <div className="colorbox m-1 col-3"><input type="color" value="#000000"/></div>
           <div className="colorbox m-1 col-3"><input type="color" value="#ffffff"/></div>
           <div className="colorbox m-1 col-3"><input type="color" value="#fe0000"/></div>
           <div className="colorbox m-1 col-3"><input type="color" value="#ddff00"/></div>
           <div className="colorbox m-1 col-3"><input type="color" value="#00ff1e"/></div>
           <div className="colorbox m-1 col-3"><input type="color" value="#0091ff"/></div>
           <div className="colorbox m-1 col-3"><input type="color" value="#f900f1"/></div>
           <div className="colorbox m-1 col-3"><input type="color" value="#d800f9"/></div>
           <div className="colorbox m-1 col-3"><input type="color" value="#e66465"/></div>

          </div>
          
              </div>





            </div>



            {/* ******************************************************************* */}
            <div className="boxrightside col-md-10  mt-5">

              <div className="boxxbodycard">
                <div className="col-md-12 col-sm-6">
                  <div className="row">
                  <Cardone data={cardbestceller}/>
                  


                  </div></div>
              </div>





            </div>
          </div>



        </div></div>




    </>
  );
};


export default BestSeller;
