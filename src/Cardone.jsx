import './Style_all.css';
import { useState } from 'react';
import axios from 'axios';


const Cardone = ({ data }) => {
    const [imgState, setImgState] = useState(null);

    const imgchange = (id) => {
        setImgState(imgState === id ? null : id);
    };

    //  const changecolor=()=>{ alert('.')}
        
    //    const addtofev=()=>{alert('.') }


    const addToFavorites = async (item) => {
        try {
            await axios.post('http://localhost:3000/favorites', item); 
            alert(`${item.Model} added to favorites!`);
        } catch (error) {
            console.error("Error adding to favorites:", error);
        }
    };

    return (
        <>
            {data.map((val) => (
                <div className="cards col-md-3 col-md-2 my-2" key={val.id}>
                    <div className="cardonebox bg-light p-2 shadow-sm m-1">
                        <div className="containerbox m-2">
                            <img src={imgState === val.id ? val.card1img2 : val.card1img1}
                                 onMouseEnter={() => imgchange(val.id)}
                                onMouseLeave={() => imgchange(val.id)}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="top-left text-center text-dark"></div>
                            <button  onClick={() => addToFavorites(val)} className='top-right border border-none text-dark'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg></button>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{val.Brand}</p>
                            <h5 className="card-title">{val.Model}</h5>
                            <br />
                            <p className="card-text h6">
                                <small className="text-body-secondary">MRP</small>
                            </p>
                            <p className="card-text fs-6 text d-block fw-semibold lh-1">
                                <small className="text-body-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-currency-rupee"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                    </svg>
                                    {val.Prise} (incl. of all taxes)
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Cardone;
