import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://backend.restapi.co.za/items/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <Navbar/>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;