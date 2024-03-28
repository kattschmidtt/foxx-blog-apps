import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const SiteContainer = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Outlet />
      
    </div>
  )
};

export default SiteContainer;