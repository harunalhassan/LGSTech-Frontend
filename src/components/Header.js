import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/lgs_logo.png';

function Header() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [closingMenu, setClosingMenu] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isStoriesOpen, setIsStoriesOpen] = useState(false);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsShrunk(currentScrollY > 50);
      if (isMenuOpen) {
        setIsVisible(true);
      } else {
        setIsVisible(currentScrollY < 10);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Reset entry animation
  useEffect(() => {
    setInitialLoad(true);
    const t = setTimeout(() => setInitialLoad(false), 800);
    return () => clearTimeout(t);
  }, [location]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setClosingMenu(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setClosingMenu(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleLinkClick = () => {
    setClosingMenu(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setClosingMenu(false);
    }, 500);
  };

  // Scroll to products section
  const handleProductsClick = (e, fromOverlay = false) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('products-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home and then scroll
      e.preventDefault();
      navigate('/', { state: { scrollTo: 'products-section' } });
    }

    // only close overlay if clicked from overlay
    if (fromOverlay) {
      handleLinkClick();
    }
  };

  // If navigated with scrollTo request
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, [location.state]);

  return (
    <header
      className={`header ${isShrunk ? 'shrink' : ''} ${
        isVisible ? 'slide-down' : 'slide-up'
      } ${initialLoad ? 'entry' : ''}`}
    >
      <div className="logo" data-aos="fade-down" data-aos-duration="500">
        <img src={logo} alt="Logo" className="logo-icon" />
        <span className="logo-text">LGSTech</span>
      </div>

      <div className="nav-container">
        <nav className="nav-links" data-aos="fade-down" data-aos-duration="1000">
          <Link to="/">Home</Link>
          <Link to="/" onClick={(e) => handleProductsClick(e, false)}>Products</Link>
          <Link to="/services">Services</Link>

          {/* 🔽 News Dropdown (hover-based) */}
          <div 
            className="dropdown" 
            onMouseEnter={() => setIsNewsOpen(true)} 
            onMouseLeave={() => setIsNewsOpen(false)}
          >
            <Link to="/news" className="dropdown-link">News ▾</Link>
            {isNewsOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/news/nadita2024">Nadita 2024</Link>
                </li>
                <li>
                  <Link to="/news/nadita2023">Nadita 2023</Link>
                </li>
              </ul>
            )}
          </div>
          

           {/* 🔽 News Dropdown (hover-based) */}
          <div 
            className="dropdown" 
            onMouseEnter={() => setIsStoriesOpen(true)} 
            onMouseLeave={() => setIsStoriesOpen(false)}
          >
            <Link to="/stories" className="dropdown-link">Stories ▾</Link>
            {isStoriesOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/stories/gecolsa">Gecolsa CAT</Link>
                </li>
                <li>
                  <Link to="/stories/folycat">Foley CAT</Link>
                </li>
                <li>
                  <Link to="/stories/pon-Norway-CAT">Pon Norway CAT</Link>
                </li>
                <li>
                  <Link to="/stories/pon-Netharlands-CAT">Pon Netherlands CAT</Link>
                </li>
              </ul>
            )}
          </div>
          
        </nav>

        <div
          className="menu-icon"
          onClick={toggleMenu}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {(isMenuOpen || closingMenu) && (
        <div className={`menu-overlay ${closingMenu ? 'closing' : 'opening'}`}>
          <div className="close-icon" onClick={toggleMenu}>
            &times;
          </div>
          <ul className="overlay-links">
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/" onClick={(e) => handleProductsClick(e, true)}>
                Product
              </Link>
            </li>
            <li>
              <Link to="/subscription" onClick={handleLinkClick}>
                Subscription
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
