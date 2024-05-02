import './../styles/Dashboard.css';
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  
  return (
    <div className="container mt-4">
      <div className="dashboard">
        <Header/>
        
        <Sidebar/>

        <Outlet/>
        
        <Footer/>
      </div>
      
    </div>
  );
}

export default Dashboard;