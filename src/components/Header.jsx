import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10" />
        <span className="font-bold text-xl text-gray-800">Om Real Estate</span>
      </div>
      <nav className="space-x-4 text-sm text-gray-700">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
