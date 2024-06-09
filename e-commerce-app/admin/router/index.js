
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import Brands from '../pages/Brands';
import Orders from '../pages/Orders';
import Users from '../pages/Users';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/brands" element={<Brands />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/users" element={<Users />} />
    </Routes>
  </Router>
);

export default AppRouter;
