import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
// import logo from "../assets/final LGSTech logo w2.png"; // ✅ Updated logo path
import logo from "../assets/primaryLGS_logo/LGSTECH Website Version.png"; // ✅ Updated logo path

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.success || data.error);
      setEmail("");
    } catch (error) {
      setMessage("Failed to subscribe. Try again later.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        {/* ✅ Replaced old logo with new full logo image */}
        <img src={logo} alt="LGS Tech Logo" className="footer-logo full-logo-footer" />
        <p>
          Copyright © 2025 LGS Tech.
          <br />
          All rights reserved
        </p>
        <div className="socials">
          <a
            href="https://www.linkedin.com/company/lgstech"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            <li><Link to="/privacy">Privacy policy</Link></li>
          </ul>
        </div>

        <div className="column subscribe">
          <h4>Stay up to date</h4>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>&#10148;</button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
