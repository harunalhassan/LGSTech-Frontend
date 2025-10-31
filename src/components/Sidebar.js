// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // <--- IMPORT THIS
import '../styles/Home.css';
import logoLight from '../assets/primaryLGS_logo/LGS Tech Logo Gradient_croppedv2.jpg';
import logoDark from '../assets/primaryLGS_logo/LGS_Tech_White_Logo_cropped-removebg-preview.png';

import ScrollToTop from './ScrollToTop';

const Sidebar = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sidebarTheme = darkMode ? 'sidebar-dark' : 'sidebar-light';

  return (
    <div className={`sidebar ${sidebarTheme}`}>
      <div className="sidebar_logo-wrapper">
        <Link to="/">
          <img
            src={logoLight}
            alt="Company Logo Light"
            className={`sidebar_logo logo-light ${darkMode ? 'hidden-logo' : 'visible-logo'}`}
          />
          <img
            src={logoDark}
            alt="Company Logo Dark"
            className={`sidebar_logo logo-dark ${darkMode ? 'visible-logo' : 'hidden-logo'}`}
          />
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