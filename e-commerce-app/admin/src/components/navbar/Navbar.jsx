import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="nav-item">Dashboard</Link>
        </li>
        <li>
          <Link to="/products" className="nav-item">Products</Link>
        </li>
        <li>
          <Link to="/orders" className="nav-item">Orders</Link>
        </li>
        <li>
          <Link to="/users" className="nav-item">Users</Link>
        </li>
        <li>
          <Link to="/brands" className="nav-item">Brands</Link>
        </li>
        
        
      </ul>
    </nav>
  );
};

export default Navbar;