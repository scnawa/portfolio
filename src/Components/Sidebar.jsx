import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Projects from '../Pages/Projects'

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">My Portfolio</h2>
      <nav>
        <ul className="sidebar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;