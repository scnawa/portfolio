import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Projects from '../Pages/Projects';

import './Sidebar.css';
import profilePhoto from '../assets/han.jpg';

function Sidebar() {
  return (
    <div className="sidebar">
       <div className="profile-section">
        <img 
          src={profilePhoto} 
          alt="Profile" 
          className="profile-photo" 
        />
        <h2 className="profile-title">John Doe</h2>
        <p className="profile-subtitle">Frontend Developer</p>
      </div>
      <nav>
        <ul className="sidebar-nav">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/Projects" className="nav-link">Projects</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;