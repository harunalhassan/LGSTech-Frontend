// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // <--- IMPORT THIS
import '../styles/Home.css';
import logo from '../assets/final_LGSTech_logo_w2-removebg-preview-sidebaar.PNG';
import ScrollToTop from './ScrollToTop';

const Sidebar = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sidebarTheme = darkMode ? 'sidebar-dark' : 'sidebar-light';

  return (
    <div className={`sidebar ${sidebarTheme}`}>
      <div className="logo-wrapper">
        {/* Make the logo link to the homepage */}
        <Link to="/">
          <img src={logo} alt="Company Logo" className="logo" />
        </Link>
      </div>

      <nav className="sidebar-links">
        {/* External links should remain as <a> tags */}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="sidebar-link">
          <span>LINKEDIN</span>
        </a>
       

        {/* --- THIS IS THE CHANGE --- */}
        {/* Use Link for internal navigation to your Blogs page */}
        <Link to="/blogs" className="sidebar-link">
          <span>BLOGS</span>
        </Link>
      </nav>

      <div className="scroll-top" onClick={scrollToTop}>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Sidebar;