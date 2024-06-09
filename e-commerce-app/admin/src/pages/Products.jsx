import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://backend.restapi.co.za/items/products')
      .then(response => response.json())
      .then(data => {
        const productsArray = data.products;
        setProducts(productsArray);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.imgurl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p>Date Added: {product.date_added}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
