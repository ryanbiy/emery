// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="company-title">EMERY TIDES LIMITED</div>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export default Navbar;
