import React, { useEffect, useState } from "react";
import { MapPin, Linkedin, CheckCircle, XCircle, X } from "lucide-react";
import "../styles/Contact.css";

const Contact = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  // Form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  // ✅ Notification state
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    isSuccess: false,
  });

  // ✅ Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Theme toggle on scroll
  useEffect(() => {
    const handleScroll = () => {
      setDarkTheme(window.scrollY !== 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Show notification
  const showNotification = (message, isSuccess) => {
    setNotification({ show: true, message, isSuccess });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  const closeNotification = () => {
    setNotification({ ...notification, show: false });
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Use environment variable
      const backendURL = process.env.REACT_APP_BACKEND_URL;

      const res = await fetch(`${backendURL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        showNotification(
          "Your message has been submitted successfully. We will be in touch soon!",
          true
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        showNotification(data.error || "Something went wrong. Try again.", false);
      }
    } catch (err) {
      console.error("Error:", err);
      showNotification("Oops! Something went wrong. Please try again later.", false);
    }
  };

  return (
    <section className={`contact-section ${darkTheme ? "dark-theme" : "light-theme"}`}>
      {/* ✅ Notification Bar */}
      {notification.show && (
        <div className={`notification-bar ${notification.isSuccess ? "success" : "error"}`}>
          <div className="notification-content">
            {notification.isSuccess ? (
              <CheckCircle size={20} className="icon-success" />
            ) : (
              <XCircle size={20} className="icon-error" />
            )}

            <div className="notification-text">
              <p className="notification-title">
                {notification.isSuccess ? "Success!" : "Oops!"}
              </p>
              <p className="notification-message">{notification.message}</p>
            </div>
          </div>

          <button onClick={closeNotification} className="close-btn">
            <X size={16} />
          </button>
        </div>
      )}

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
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Your Email</label>
          </div>

          <div className="input-group">
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
