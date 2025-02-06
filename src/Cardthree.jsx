

const Cardthree = ({ data }) => {

  
  return (
    <>
    <div className="boxcard2">
        <div className="row ">
            {data.map((val, index) => (
                <div key={index} className="col-md-3 col-sm-6 m-3 bg-dark text-lignt">
                    <div className="card2   p-2">
                        <div className="imgscale text-center">
                            <img src={val.card3img} className="img-fluid rounded" alt="..." />
                        </div>
                        <div className="card-body text-center mt-2">
                            <h5 className="card-title text-light fw-bold">{val.titalnew}</h5>
                            <p className="card-text ">{val.About1}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</>

  );
};

export default Cardthree;
