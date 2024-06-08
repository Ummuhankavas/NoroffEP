import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://backend.restapi.co.za/items/products')
      .then(response => response.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div>
      <Navbar/>
      <h1>Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.orderNumber}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
