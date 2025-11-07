import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
// import logo from "../assets/final LGSTech logo w2.png"
// import logo from "../assets/primaryLGS_logo/LGSTECH Website Version.png"
import logo from "../assets/primaryLGS_logo/LGS Tech 3D logo_cropped.jpg"

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

  const handleProductsClick = (e, fromOverlay = false) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('products-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      e.preventDefault();
      navigate('/', { state: { scrollTo: 'products-section' } });
    }

    if (fromOverlay) {
      handleLinkClick();
    }
  };

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
        <Link to="/" className="logo-link">
          {/* ✅ Replaced text + icon with new full logo image */}
          <img src={logo} alt="LGS Tech Logo" className="logo-icon full-logo" />
        </Link>
      </div>

      <div className="nav-container">
        <nav className="nav-links" data-aos="fade-down" data-aos-duration="1000">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/" onClick={(e) => handleProductsClick(e, false)}>
            Products
          </Link>

          {/* News Dropdown */}
          <div 
            className="dropdown" 
            onMouseEnter={() => setIsNewsOpen(true)} 
            onMouseLeave={() => setIsNewsOpen(false)}
          >
            <Link to="/news" className="dropdown-link">News ▾</Link>
            {isNewsOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/news/nadita2024">Nadita 2024</Link></li>
                <li><Link to="/news/nadita2023">Nadita 2023</Link></li>
              </ul>
            )}
          </div>

          {/* Stories Dropdown */}
          <div 
            className="dropdown" 
            onMouseEnter={() => setIsStoriesOpen(true)} 
            onMouseLeave={() => setIsStoriesOpen(false)}
          >
            <Link to="/stories" className="dropdown-link">Stories ▾</Link>
            {isStoriesOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/stories/gecolsa">Gecolsa CAT</Link></li>
                <li><Link to="/stories/folycat">Foley CAT</Link></li>
                <li><Link to="/stories/pon-Norway-CAT">Pon Norway CAT</Link></li>
                <li><Link to="/stories/pon-Netherlands-CAT">Pon Netherlands CAT</Link></li>
              </ul>
            )}
          </div>

          <Link to="/contact">Contact Us</Link>
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
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/" onClick={(e) => handleProductsClick(e, true)}>Products</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
