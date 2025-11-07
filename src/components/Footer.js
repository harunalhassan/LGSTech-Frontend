import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/primaryLGS_logo/LGSTECH Website Version.png";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // ✅ New loading state

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    setIsLoading(true); // ✅ Start loading
    setMessage("");

    try {
      const backendURL = process.env.REACT_APP_BACKEND_URL;
      const res = await fetch(`${backendURL}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.success || data.error);
      setEmail("");

      // ✅ Auto-hide message after 5 seconds
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (error) {
      setMessage("Failed to subscribe. Try again later.");
      setTimeout(() => setMessage(""), 5000);
    } finally {
      setIsLoading(false); // ✅ Stop loading
    }
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="LGS Tech Logo" className="footer-logo full-logo-footer" />
        <p>
          Copyright © 2025 LGS Tech.
          <br />
          All rights reserved
        </p>
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
            <li><Link to="/privacy">Privacy policy</Link></li>
          </ul>
        </div>

        <div className="column subscribe">
          <h4>Stay up to date</h4>
          <div className="subscribe-wrapper">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading} // ✅ disable input while loading
            />
            <button onClick={handleSubscribe} disabled={isLoading}>
              {isLoading ? <div className="loader"></div> : <>&#10148;</>}
            </button>
          </div>

          {message && (
            <p
              className={`subscribe-message ${message.toLowerCase().includes("thank") ||
                  message.toLowerCase().includes("already")
                  ? "success"
                  : "error"
                }`}
            >
              {message}
            </p>
          )}

        </div>
      </div>
    </footer>
  );
}

export default Footer;
