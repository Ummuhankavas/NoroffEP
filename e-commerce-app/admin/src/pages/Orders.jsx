import React from 'react';
import Navbar from '../components/navbar/Navbar';


function AdminOrders() {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <main style={{ flexGrow: 1, padding: '20px' }}>
        Admin Orders Content
      </main>
    </div>
  );
}

export default AdminOrders;
