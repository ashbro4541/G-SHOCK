import  { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`)
      .then(() => setProducts(products.filter(product => product.id !== id)))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Product List</h2>
      <Link to="/add">Add Product</Link>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} width="100" />
            <p>{product.name} - ₹{product.price}</p>
            <Link to={`/edit/${product.id}`}>Edit</Link>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
