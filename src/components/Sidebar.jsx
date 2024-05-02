import './../styles/Sidebar.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
 


function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar">
      <div className="hamburger" onClick={toggleSidebar}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <div className={`sidebar-content ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-menu">
          <i className="fas fa-bars" onClick={toggleSidebar}></i>
        </div>
        <ul style={{ padding: 0, listStyleType: 'none' }}>
          <li style={{ marginBottom: '10px' }}>
            <Link to="body"><i className="fas fa-tachometer-alt mx-2"></i>Accueil</Link>
          </li>
          
          <li style={{ marginBottom: '10px' }}>
            <Link to="clients"><i className="fas fa-user-tie mx-2"></i>Clients </Link>
          </li>
         
          <li style={{ marginBottom: '10px' }}>
            <Link to="receptionnistes"><i className="fas fa-graduation-cap mx-2"></i>Receptionnistes</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="chambres"><i className="fas fa-bed mx-2"></i>Chambres</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="reservations"><i className="fas fa-calendar-check mx-2"></i>Reservations</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
          <NavLink to="/logout"><i className="fas fa-sign-out-alt mx-2"></i>Déconnexion</NavLink>
        </li>

        </ul>
      </div>
    </div>
  );
}

export default Sidebar;