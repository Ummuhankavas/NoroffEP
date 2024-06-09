import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';

const Brand = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch('http://backend.restapi.co.za/items/brands')
      .then(response => response.json())
      .then(data => setBrands(data.data));
  }, []);

  return (
    <div>
      <Navbar/>
      <h1>Brands</h1>
      <ul>
        {brands.map(brand => (
          <li key={brand.id}>{brand.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Brand;