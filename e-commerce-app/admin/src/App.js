import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import User from './pages/Users';
import Products from './pages/Products';
import Brand from './pages/Brands';
// import Orders from './pages/Orders';






function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        
        <main style={{ flexGrow: 1, padding: '20px' }}>
        <Routes>
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/brands" element={<Brand />} />
      {/* <Route path="/admin/orders" element={<Orders />} /> */}
      <Route path="/admin/users" element={<User />} />
    </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
