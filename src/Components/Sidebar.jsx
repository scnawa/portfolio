import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';
import profilePhoto from '../assets/han.jpg';
import { AiFillProduct } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="sidebar">
       <div className="profile-section">
        <img 
          src={profilePhoto} 
          alt="Profile" 
          className="profile-photo" 
        />
        <h2 className="profile-title">Sinha Nawa</h2>
        <p className="profile-subtitle">Software Engineer</p>
      </div>
      <nav>
        <ul className="sidebar-nav">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li>
            <Link to="/Projects" className="nav-link">
              <AiFillProduct /> Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;