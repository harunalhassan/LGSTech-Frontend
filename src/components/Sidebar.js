// src/components/Sidebar.js
import React from 'react';
import '../styles/Home.css'; // We'll define styles next
import logo from '../assets/LGS_portrait.png'; // Replace with your actual logo
// import { FaLinkedin, FaTwitter, FaGithub, FaArrowUp } from 'react-icons/fa';
import ScrollToTop from './ScrollToTop';


const Sidebar = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sidebarTheme = darkMode ? 'sidebar-dark' : 'sidebar-light';

  return (
    <div className={`sidebar ${sidebarTheme}`}>
      <div className="logo-wrapper">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>

      <nav className="sidebar-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="sidebar-link">
          <span>LINKEDIN</span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="sidebar-link">
          <span>TWITTER</span>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="sidebar-link">
          <span>FACEBOOK</span>
        </a>
        <a href="#cblogs" className="sidebar-link">
          <span>BLOGS</span>
        </a>
      </nav>

      <div className="scroll-top" onClick={scrollToTop}>
        <ScrollToTop/>
      </div>
    </div>
  );
};

export default Sidebar;
