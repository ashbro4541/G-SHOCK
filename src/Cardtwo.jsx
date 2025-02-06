import React from 'react';
import './Style_all.css';  // Make sure to import your CSS file

const Cardtwo = ({ data }) => {
  return (

<div className="boxcard2 mx-2  ">
<div className="row">


    <>
      {data.map((val) => (
        <div className="card2 col-md-2 col-sm-4 m-2 p-1 mb-5 bg-body-tertiary rounded cardbody" key={val.id}>
          <div className="imgscale">
            <img src={val.Card2img} className="card-img-top img-zoom" alt="..." />
            
          </div>
          <div className="card-body my-2 mx-3">
            <h5 className="card-title fs-6  ">{val.About_gshock}</h5>
          </div>
        </div>
      ))}
    </>
    </div>
    </div>
  );
};


export default Cardtwo;
