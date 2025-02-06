import React, { useEffect, useState } from 'react'; // ✅ Fix: Import React Hooks
import axios from 'axios'; // ✅ Fix: Import Axios
import './Style_all.css';

const FindaStore = () => {
    const [data, setData] = useState([]); // ✅ useState is now defined

    const loadData = async () => {
        try {
            const result = await axios.get("http://localhost:3000/Address"); // ✅ axios is now defined
            setData(result.data);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []); 

    return (
        <>
            {/* G-SHOCK Header */}
            <div className="col-md-12 col-sm-6 d-flex justify-content-center">
                <div><img src="Images/about/gshock.png" alt="G-SHOCK Logo" /></div>
            </div>

            <div className="col-md-12 d-flex justify-content-center">
                <div><h5>G-SHOCK Stores List</h5></div>
            </div>

            {/* Stores List */}
            <div className="container">
                <div className="row ">
                    {data.length > 0 ? (
                        data.map((store, index) => (
                        <div className="col-md-3 col-sm-4 my-4  " key={index}>
                                <div className="card shadow-sm p-3 bagroundcolor ">
                                    <div className="d-flex align-items-center ">
                                        <img src="Images\about\lastlogo.svg" alt="Store Icon" className="me-2" width="20" />
                                        <span className="fw-bold text-dark">Casio Exclusive Store</span>    
                                    </div><hr />
                                    <div className="boxinfo  bagroundcolor3"> <h6 className="mt-2 fw-bold">{store.name}</h6>
                                    <p className="text-muted small">{store.address}</p>
                                     </div>
                                 
                                 <a href={store.link}>    <button  className="btn btn-primary mx-auto w-50">
                                        search
                                    </button></a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-md-12 text-center">
                            <p>Loading stores...</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default FindaStore;
