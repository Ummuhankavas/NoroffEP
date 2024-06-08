// src/router/index.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import AdminProducts from '../pages/AdminProducts';
import AdminBrands from '../pages/AdminBrands';
import AdminOrders from '../pages/AdminOrders';
import AdminUsers from '../pages/AdminUsers';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/brands" element={<AdminBrands />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/users" element={<AdminUsers />} />
    </Routes>
  </Router>
);

export default AppRouter;
