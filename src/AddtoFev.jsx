import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddtoFev = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetchFavorites();
    }, []);

    const fetchFavorites = async () => {
        try {
            const response = await axios.get('http://localhost:3000/favorites'); // Update API if needed
            setFavorites(response.data);
        } catch (error) {
            console.error("Error fetching favorites:", error);
        }
    };

    const remove = async (id) => {
        if (window.confirm('remove this item?')) {
            try {
                await axios.delete(`http://localhost:3000/favorites/${id}`); // Corrected API URL
                setFavorites(favorites.filter((item) => item.id !== id)); // Update state after deletion
                alert('Deleted successfully');
            } catch (error) {
                console.error("Error deleting item:", error);
            }
        }
    };
    

    return (
        <div className="container">
            <h2 className="my-4">My Favorites</h2>
            <div className="row">
                {favorites.length === 0 ? (
                    <p>No favorite items added.</p>
                ) : (
                    favorites.map((item) => (
                        <div className="col-md-3" key={item.id}>
                            <div className="card shadow-sm">
                                <img src={item.card1img1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.Model}</h5>
                                    <p className="card-text">{item.Brand}</p>
                                    <p className="fw-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                        </svg>
                                        {item.Prise}
                                    </p>

                                    <button onClick={() => remove(item.id)} className="btn btn-danger w-75">
                                        Remove
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AddtoFev;
