import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/lgslogo.png'
// import Spinetool from './Spinetool'
function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-left">
        <img src={logo} alt="LGS Logo" className="footer-logo" />
        <p>Copyright © 2025 LGSTech.<br />All rights reserved</p>
        <div className="socials">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-dribbble"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
      <div className="footer-columns">
        <div className="column">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="column">
          <h4>Support</h4>
          <ul>
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>   
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
