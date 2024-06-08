import React from 'react'
import Navbar from '../components/navbar/Navbar';
import { useState, useEffect } from 'react';


const Dashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://backend.restapi.co.za/items/products')
      .then(response => response.json())
      .then(data => {
        const ordersArray = data.orders;
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <h1>Dashboard</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.orderNumber}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;