import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';

const Dashboard = () => {
  const [orders, setOrders] = useState([]); 

  useEffect(() => {
    fetch('http://backend.restapi.co.za/items/products')
      .then(response => response.json())
      .then(data => {
        
        const ordersArray = data.data; 
        setOrders(ordersArray); 
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
        
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <h1>Dashboard</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.name}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;