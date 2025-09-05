import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import "../styles/Contact.css";

const Contact = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  // ✅ Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Theme toggle on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setDarkTheme(false); // ☀️ Light at top
      } else {
        setDarkTheme(true);  // 🌙 Dark when scrolled
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`contact-section ${darkTheme ? "dark-theme" : "light-theme"}`}>
      {/* Heading */}
      <h1 className="contact-title" data-aos="fade-up">Let’s Connect</h1>
      <p className="contact-subtitle" data-aos="fade-up">
        Have questions, ideas, or just want to say hello?  
        Reach us directly or send a quick message below.
      </p>

      {/* Contact Info Section */}
      <div className="info-section">
        {/* Map */}
        <div className="map-container" data-aos="fade-right">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.146760249056!2d153.02509257546015!3d-27.463918916073397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a065b3a95db%3A0x18e2df9b41d6124!2s457%20Upper%20Edward%20St%2C%20Spring%20Hill%20QLD%204000%2C%20Australia!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Details */}
        <div className="details-container" data-aos="fade-left">
          <h2>Contact Information</h2>
          <ul>
          
            
            <li>
              <MapPin className="icon" />
              <span>
                457 Upper Edward Street,  
                Spring Hill, QLD - 4000
              </span>
            </li>
          </ul>

          <div className="social-links">
            <p className="follow-header">Follow us on</p>
            <div className="icon-links">
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-card form-card" data-aos="fade-up" data-aos-duration="1000">
        <h2>Send a Message</h2>
        <form>
          <div className="input-group">
            <input type="text" required />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label>Your Email</label>
          </div>

          <div className="input-group">
            <textarea rows="5" required></textarea>
            <label>Your Message</label>
          </div>

          <button className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
