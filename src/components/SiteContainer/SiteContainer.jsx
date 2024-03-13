import React from 'react';
import Navbar from '../Navbar/Navbar';
/* 
import entry from '../../entry.json';
import EntryCard from '../EntryCard/EntryCard';
import AboutMeCard from '../AboutMe/AboutMeCard';
import MapboxComponent from '../Apps/MapboxApp/MapboxApp'; */
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