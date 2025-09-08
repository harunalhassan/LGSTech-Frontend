import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import '../styles/Footer.css';
import logo from '../assets/lgslogo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="LGS Logo" className="footer-logo" />
        <p>Copyright © 2025 LGSTech.<br />All rights reserved</p>
        <div className="socials">
          <a href="https://www.linkedin.com/company/lgstech" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="footer-columns">
        <div className="column">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/stories">Stories</Link></li>
          </ul>
        </div>

        <div className="column">
          <h4>Support</h4>
          <ul>
            <li><Link to="/help">Help center</Link></li>
            {/* <li><Link to="/terms">Terms of service</Link></li> */}
            <li><Link to="/privacy">Privacy policy</Link></li>
          </ul>
        </div>

        <div className="column subscribe">
          <h4>Stay up to date</h4>
          <input type="email" placeholder="Your email address" />
          <button>&#10148;</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
