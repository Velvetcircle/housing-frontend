import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import InventoryDashboard from '../pages/InventoryDashboard';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Careers from '../pages/Careers';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<InventoryDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
