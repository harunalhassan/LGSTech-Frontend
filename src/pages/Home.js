import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import '../styles/Home.css';
import dashboard1 from '../assets/carousel3.jpg';
import dashboard2 from '../assets/carousel2.jpg';
import dashboard3 from '../assets/carousel1.jpg';
import ScrollToTop from '../components/ScrollToTop';
import logo from '../assets/LGS_portrait.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';

import vendorIcon from '../assets/icons/icon1.png';
import productIcon from '../assets/icons/icon2.png';
import readinessIcon from '../assets/icons/icon3.png';
import consultingIcon from '../assets/icons/icon3.png';
import developmentIcon from '../assets/icons/icon3.png';
import implementationIcon from '../assets/icons/icon3.png';
import programIcon from '../assets/icons/icon3.png';
import powerPlatformIcon from '../assets/icons/icon4.png';
import migrationIcon from '../assets/icons/icon5.png';
import contactImg from '../assets/Webinar-pana.svg';
import TiltedCard from '../components/TiltedCard';


// ============================================
import "../styles/Stories.css";

import foleyImg from "../assets/stories/Foley logo_border.jpg";
import poncatImg from "../assets/stories/Pon-Power-logo.jpg";
import xaptImg from "../assets/stories/XN_XAPT_logo_pos_RGB_1600.jpg";
import bgImg from "../assets/stories/pexels-olia-danilevich-8145336.jpg";

import coverFoley from "../assets/stories/pexels-fauxels-3183197.jpg";
import coverNorway from "../assets/stories/pexels-kampus-8204387.jpg";
import coverNL from "../assets/stories/pexels-khwanchai-12885861.jpg";
import coverGecolsa from "../assets/carousel1.jpg";
  
// ============================================================


import timesheetIcon from '../assets/logos/Microsoft_Power_Platform_Icons_PowerApps.svg';
import fixedAssetsIcon from '../assets/logos/Microsoft_Power_Platform_Icons_PowerApps.svg';
import migrationDynamicsIcon from '../assets/logos/Dynamics365_scalable.svg';
import upgradeIcon from '../assets/logos/Dynamics365_scalable.svg';
import archiveIcon from '../assets/logos/Dynamics365_scalable.svg';
import azureDevOpsIcon from '../assets/logos/icons8-azure-48.png';
import naxt from '../assets/logos/xapt NAXT.png';

// === client logos  ===
import clientLogo1 from '../assets/clients/shoka.png';
import clientLogo2 from '../assets/clients/datamc.png';
import clientLogo3 from '../assets/clients/microsoft.png';
import clientLogo4 from '../assets/clients/ddptech.png';
import News from './News/News';
import BackToTopButton from '../components/BackToTopButton';


const whatsNewItems = [
  {
    id: 1,
    title: 'D365 Security Best Practices with RBSM',
    desc: 'We provide role-based access control, restricting data based on user roles like Admin, Manager, Team Lead or Guest.',
    image: dashboard1,
    link: '/d365-security',
    ctaText: 'Know More',
    bgColor: 'rgb(117, 193, 0)', // brand teal
  },
  {
    id: 2,
    title: 'Microsoft Dynamics 365 Implementation Services',
    desc: 'From project initiation to deployment, we handle end-to-end D365 implementations. Our services cover configuration, integration, ISV management, testing, training and change management to ensure smooth rollouts.',
    image: dashboard2,
    link: '/d365-implementation-services',
    ctaText: 'Know More',
    bgColor: 'rgb(0, 128, 123)', // green shade
  },
  {
    id: 3,
    title: 'Data Migration Best Practices',
    desc: 'Engage stakeholders, map data accurately, transform efficiently, validate often and automate for seamless and secure migration.',
    image: dashboard3,
    link: '/data-migration-best-practices',
    ctaText: 'Know More',
    bgColor: 'rgb(0, 37, 93)', // bright cyan
  },
];




function Slide({ item, isActive }) {
  const [play, setPlay] = useState(false);
  const prevActiveRef = useRef(isActive);

  useEffect(() => {
    if (isActive && !prevActiveRef.current) {
      setPlay(false);
      requestAnimationFrame(() => setPlay(true));
    }
    prevActiveRef.current = isActive;
  }, [isActive]);

  useEffect(() => {
    if (isActive) setPlay(true);
  }, []); // only once

  return (
    <div
      className={`slide ${isActive ? "active" : ""}`}
      aria-hidden={!isActive}
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="overlay" />
      <div
        className={`slide-content ${play ? "animate-text" : ""}`}
        style={{ backgroundColor: item.bgColor }}
      >
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <Link to={item.link} className="slide-cta">
          {item.ctaText} →
        </Link>
      </div>
    </div>
  );
}
function WhatsNewCarousel({ items, autoPlayInterval = 4000 }) {
  const total = items.length;
  const [internalIndex, setInternalIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(true);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);
  const [darkenSide, setDarkenSide] = useState(null);
  const [intensity, setIntensity] = useState(0);
  const [hoverSide, setHoverSide] = useState(null);

  const extended = [items[total - 1], ...items, items[0]];
  useEffect(() => {
  const handleVisibilityChange = () => {
    if (document.hidden) {
      clearTimeout(timeoutRef.current); // Pause autoplay
    } else {
      startAutoPlay(); // Resume autoplay
      void containerRef.current?.offsetHeight; // trigger reflow safely
      setTransitioning(false);
      requestAnimationFrame(() => setTransitioning(true));
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
}, []);
useEffect(() => {
  const handleVisibilityChange = () => {
    if (document.hidden) {
      clearTimeout(timeoutRef.current); // Pause autoplay
    } else {
      startAutoPlay(); // Resume autoplay
      void containerRef.current?.offsetHeight; // trigger reflow safely
      setTransitioning(false);
      requestAnimationFrame(() => setTransitioning(true));
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
}, []);


  useEffect(() => {
    startAutoPlay();
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [internalIndex]);

  const startAutoPlay = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      move(1);
    }, autoPlayInterval);
  };

  const move = (delta) => {
    setInternalIndex((i) => i + delta);
    setTransitioning(true);
  };

  const slideNext = () => move(1);
  const slidePrev = () => move(-1);

  const goTo = (realIdx) => {
    setInternalIndex(realIdx + 1);
    setTransitioning(true);
  };

  const handleTransitionEnd = () => {
    if (internalIndex === total + 1) {
      setTransitioning(false);
      setInternalIndex(1);
    } else if (internalIndex === 0) {
      setTransitioning(false);
      setInternalIndex(total);
    }
  };

  useEffect(() => {
    if (!transitioning) {
      requestAnimationFrame(() => setTransitioning(true));
    }
  }, [transitioning]);

  const visibleRealIndex = (() => {
    if (internalIndex === 0) return total - 1;
    if (internalIndex === total + 1) return 0;
    return internalIndex - 1;
  })();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };
  const handleMouseLeave = () => {
    startAutoPlay();
    setDarkenSide(null);
    setIntensity(0);
    setHoverSide(null);
  };
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const threshold = 200;
    const navThreshold = 150;

    if (x >= width / 2) {
      const distanceToEdge = Math.min(threshold, width - x);
      const raw = Math.max(0, Math.min(1, (threshold - distanceToEdge) / threshold));
      setDarkenSide('right');
      setIntensity(raw * 0.6);
    } else {
      const distanceToEdge = Math.min(threshold, x);
      const raw = Math.max(0, Math.min(1, (threshold - distanceToEdge) / threshold));
      setDarkenSide('left');
      setIntensity(raw * 0.6);
    }

    if (x <= navThreshold) setHoverSide('left');
    else if (x >= width - navThreshold) setHoverSide('right');
    else setHoverSide(null);
  };

  return (
    <section
      className="big-carousel-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div
        className={`side-darken ${darkenSide || ''}`}
        style={{ '--intensity': intensity }}
        aria-hidden="true"
      />

      <div
        className="carousel-slides-wrapper"
        style={{
          transform: `translateX(-${internalIndex * 100}%)`,
          transition: transitioning ? 'transform 0.8s ease' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extended.map((it, idx) => (
          <Slide key={`${it.id}-${idx}`} item={it} isActive={idx === internalIndex} />
        ))}
      </div>

      <button
        aria-label="Previous slide"
        className={`carousel-nav prev ${hoverSide === 'left' ? 'visible' : 'hidden'}`}
        onClick={slidePrev}
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        className={`carousel-nav next ${hoverSide === 'right' ? 'visible' : 'hidden'}`}
        onClick={slideNext}
      >
        ›
      </button>

      <div className="carousel-dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === visibleRealIndex ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}


// Services section

const services = [
  {
    name: 'ERP Vendor Evaluation',
    icon: vendorIcon,
    features: [
      'Business requirements documentation',
      'Request for proposal (RFP) development',
      'ERP Business case development',
      'RFP responses evaluation and scoring',
      'RFP process management',
    ],
  },
  {
    name: 'ERP Product Evaluation',
    icon: productIcon,
    features: [
      'Organisation application landscape study',
      'Organisation technology landscape study',
      'Business requirements documentation',
      'Non-functional requirements documentation',
      'ERP Product evaluation and scoring',
      'ERP Product evaluation process management',
    ],
  },
  {
    name: 'Microsoft Dynamics 365 Readiness Assessment',
    icon: readinessIcon,
    features: [
      'Organisation application landscape study',
      'Organisation technology landscape study',
      'Organisation people demography study',
      'Organisation change readiness study',
      'Organisation support services study',
      'Readiness assessment report, dashboarding and management consulting',
    ],
  },
  {
    name: 'Microsoft Dynamics 365 Consulting Services',
    icon: consultingIcon,
    features: [
      'Dynamics 365 Finance',
      'Dynamics 365 Project management and accounting',
      'Dynamics 365 SCM',
      'Dynamics 365 Commerce',
      'Dynamics 365 Sales',
      'Dynamics 365 Field service',
      'Dynamics 365 Customer service',
      'Dynamics 365 Integration service',
      'Dynamics 365 Security',
      'Dynamics 365 Environment strategy',
      'Dynamics 365 Solution and Technology Architecture',
    ],
  },
  {
    name: 'Microsoft Dynamics 365 Development Services',
    icon: developmentIcon,
    features: [
      'Product extension requirements',
      'Product extension design',
      'Product extension development',
      'Azure DevOps best practice build automation',
    ],
  },
  {
    name: 'Microsoft Dynamics 365 Implementation Services',
    icon: implementationIcon,
    features: [
      'End to end management of implementation services',
      'Project initiation and team mobilisation',
      'Board approvals and periodic reporting',
      'PMO establishment',
      'Azure DevOps setup for project work streams and work items management',
      'Product configuration management',
      'Product development management',
      'Product deployment cycles management',
      'Integration services management',
      'Power Platform integration management',
      'Third party vendor services management',
      'ISV solution & deployment management',
      'Testing services management',
      'Change and training services management',
    ],
  },
  {
    name: 'Microsoft Dynamics 365 Program and Project Management Services',
    icon: programIcon,
    features: [
      'Program management services',
      'Project management services',
      'Agile template-based Azure DevOps management',
      'Product deployment management services',
    ],
  },
  {
    name: 'Microsoft Power Platform Development and Training Services',
    icon: powerPlatformIcon,
    features: [
      'PowerApps design and implementation services',
      'PowerAutomate design and implementation services',
      'PowerBI design, implementation and deployment services',
    ],
  },
  {
    name: 'Data Migration Services include end to end D365 data migration automation',
    icon: migrationIcon,
    features: [
      'End to end D365 data migration automation',
      'Data migration strategies',
      'Data migration selection and mapping',
      'Extraction, Transformation and Load automation',
      'End to end DM project management',
    ],
  },
];

function FeatureList({ features }) {
  const [expanded, setExpanded] = useState(false);
  const threshold = 3;
  const visibleFeatures = expanded ? features : features.slice(0, threshold);

  return (
    <div className="feature-list">
      {visibleFeatures.map((f, i) => (
        <div key={i} className="feature-item">
          {f}
        </div>
      ))}
      {features.length > threshold && (
        <div
          className="toggle-more"
          onClick={() => setExpanded((e) => !e)}
          aria-label={expanded ? 'Show less features' : 'Show more features'}
        >
          {expanded ? 'Show less ▲' : `+${features.length - threshold} more ▼`}
        </div>
      )}
    </div>
  );
}

function ServiceCard({ name, index, Icon, features = [] }) {
  const ref = useRef();
  const [stage, setStage] = useState(0); // 0 initial, 1 slide, 2 reveal name
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate(); // React Router navigation

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStage(1), 100 + index * 100);
          setTimeout(() => setStage(2), 600 + index * 100);
          obs.unobserve(ref.current);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      className={`service-card ${stage > 0 ? "animate" : ""} ${
        hovered ? "is-hovered" : ""
      }`}
      ref={ref}
      style={{ "--delay": `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="slide-bg" />
      <div className="content">
        <div className="top-row">
          <div className="icon-wrapper light-bg">
            <img src={Icon} alt={name} width={24} height={24} />
          </div>
          <div
            className="service-serial"
            style={{
              opacity: stage === 2 ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}
          >
            {(index + 1).toString().padStart(2, "0")}
          </div>
        </div>

        <div className="service-title">{name}</div>

        <div className={`service-features ${hovered ? "visible" : ""}`}>
          <FeatureList features={features} />
        </div>

        {/* --- Contact Button --- */}
        <button
          className="service-contact-btn"
          onClick={() => navigate("/contact")}
        >
          Connect With Us
        </button>
      </div>
    </div>
  );
}
function ServicesSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`services-section${inView ? ' dark-theme' : ''}`}
      ref={sectionRef}
      aria-label="Our Services"
    >
      <h2 className="services-title" data-aos="fade-down">
        Services
      </h2>
      <p className="services-subtitle" data-aos="fade-up">
        Delivering innovative and reliable solutions to drive your business forward.
      </p>
      <div className="services-cards">
        {services.map((svc, i) => (
          <ServiceCard
            key={svc.name}
            name={svc.name}
            index={i}
            Icon={svc.icon}
            features={svc.features}
          />
        ))}
      </div>
    </section>
  );
}


function ConnectWithUsSection({ onEnterLightMode }) {
  const navigate=useNavigate()
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          onEnterLightMode && onEnterLightMode();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [onEnterLightMode]);

  const achievements = [
    {
      title: '100+ Successful Projects',
      image: require('../assets/achievements/project.jpg'),
      icon: require('../assets/achievements/project-icon.png'),
    },
    {
      title: 'Certified Microsoft Partner',
      image: require('../assets/achievements/microsoft-partner.jpg'),
      icon: require('../assets/achievements/partner-icon.png'),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`connect-with-us-section ${inView ? '' : ''}`}
      aria-label="Connect With Us"
    >
      <div className="connect-content">
        <div className="text-column" data-aos="fade-right">
          <h2>Let’s Build Something Amazing</h2>
          <p>
            Ready to transform your business? Let’s connect and explore how we can
            bring your ideas to life with our powerful solutions.
          </p>
          <button className="connect-btn" data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom" onClick={() => navigate("/contact")}>Connect With Us</button>
        </div>

    <div className="cards-column">
  {achievements.map((item, index) => (
    <div
      key={index}
      className={`tilted-card-wrapper ${inView ? 'reveal' : ''}`}
      style={{ '--delay': `${index * 200}ms` }}
    >
      <div className="card-background-tile" >
        <div className="tilted-card-mask-wrapper">
          <TiltedCard
            imageSrc={item.image}
            altText={item.title}
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={18}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
          <div className="image-mask" />
        </div>
        <p className="achievement-title">
          <p>{item.title}</p>
          
        </p>
          <img src={item.icon} alt="achievement icon" className="achievement-icon" />
      </div>
    </div>
  ))}
</div>



      </div>
    </section>
  );
}

// Product section


// === product structure ===
const products = [
  {
    category: 'Data Migration',
    items: [
      {
        name: 'Microsoft Dynamics 365 Data Migration Solution',
        logo: migrationDynamicsIcon,
        desc: 'End-to-end migration to Dynamics 365 with validation, rollback and automation.',
        route: '/d365-data-migration-product',  // ✅ new
      },
      {
        name: 'AX2012 to Dynamics 365 Upgrade Solution',
        logo: upgradeIcon,
        desc: 'Smooth upgrade path from AX2012 to Dynamics 365 with data fidelity and minimal downtime.',
        route: '/AX2012-upgrade-product',  // ✅ new

       
      },
      {
        name: 'Legacy Application to Fabric Data Archive Solution',
        logo: archiveIcon,
        desc: 'Archive legacy datasets into Microsoft Fabric with searchable, compressed retention.',
        route: '/Legacy-application-product',  // ✅ new
      },
      
      {
        name: 'NAXT 2012 to NAXT365 Upgrade Solution',
        logo: migrationDynamicsIcon,
        desc: 'Built on Microsoft Dynamics 365, is an all-in-one DMS for heavy equipment dealers and rental companies. It unifies sales, rental, service, parts, finance, CRM and BI to streamline operations.',
        route: '/NAXT2012-to-NAXT365-product',  // ✅ new
      },
    ],
  },
  {
    category: 'PowerApp',
    items: [
      {
        name: 'Timesheet Management Solution',
        logo: timesheetIcon,
        desc: 'Track time seamlessly, approve workflows and integrate with project billing.',
        route: '/timesheeet-management-product',  // ✅ new

      },
      {
        name: 'Fixed Assets Stocktake Solution',
        logo: fixedAssetsIcon,
        desc: 'Audit, reconcile, and monitor fixed assets with ease using mobile-assisted inventory.',
        route: '/fixed-assests-stock-product',  // ✅ new
      },
    ],
  },
  
  {
    category: 'Project Management',
    items: [
      {
        name: 'Azure DevOps Toolkit for Microsoft Dynamics 365 Project Management',
        logo: azureDevOpsIcon,
        desc: 'Integrated pipelines, work item governance and release orchestration tailored for D365.',
        route: '/Azure-devops-project-management-product',  // ✅ new
      },
    ],
  },
  
];

// === ProductCard ===
function ProductCard({ name, logo, desc, route, className = "" }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(route);
   
  };

  return (
    <div className={`product-card ${className}`}>
      <div className="product-logo-wrapper">
        <div className="product-logo">
          <img
            src={logo}
            alt={name}
            loading="lazy"
            className={name.includes("Azure DevOps") ? "azure-logo" : ""}
          />
        </div>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
      <div className="product-cta">
        <button
          className="explore-btn"
          aria-label={`Explore ${name}`}
          onClick={handleExplore}
        >
          <span className="label">Explore</span>
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
}


// === ProductsSection ===
function ProductsSection({ onVisibleDarkMode }) {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(products[0].category);
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle resize for mobile/desktop toggle
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          onVisibleDarkMode && onVisibleDarkMode();
        } else {
          setInView(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [onVisibleDarkMode]);

  const categories = products.map((p) => p.category);
  const currentIndex = categories.indexOf(activeTab);

  const goLeft = () => {
    const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
    setActiveTab(categories[prevIndex]);
  };

  const goRight = () => {
    const nextIndex = (currentIndex + 1) % categories.length;
    setActiveTab(categories[nextIndex]);
  };

  const activeGroup = products.find((p) => p.category === activeTab);

  return (
    <section
      className={`products-section ${inView ? "dark-theme-in-view" : ""}`}
      ref={sectionRef}
      aria-label="Our Products"
      style={{
        position: "relative",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      {/* Foreground Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="products-header">
          <h2 data-aos="fade-down">Our Products</h2>
          <p data-aos="fade-up">
            Built to empower, migrate and manage your enterprise-scale Dynamics ecosystem.
          </p>
        </div>

        {/* Tabs only visible on desktop */}
        {!isMobile && (
          <div
            className="product-tabs"
            role="tablist"
            aria-label="Product categories"
            data-aos="zoom-in-up"
          >
            {products.map((grp) => (
              <button
                key={grp.category}
                role="tab"
                aria-selected={activeTab === grp.category}
                className={`tab-btn ${activeTab === grp.category ? "active" : ""}`}
                onClick={() => setActiveTab(grp.category)}
              >
                {grp.category}
              </button>
            ))}
          </div>
        )}

        {/* Cards */}
        <div
          className={`products-grid ${
            activeGroup.items.length === 1 ? "single" : ""
          }`}
        >
          {isMobile
            ? // On mobile → show only first card of active group
              [activeGroup.items[0]].map((prod) => (
                <ProductCard
                  key={prod.name}
                  name={prod.name}
                  logo={prod.logo}
                  desc={prod.desc}
                  route={prod.route}   // ✅ pass route
                  className="active-card"
                  data-aos="fade-up"
                />
              ))
            : // On desktop → show all cards in category
              activeGroup.items.map((prod) => (
                <ProductCard
                  key={prod.name}
                  name={prod.name}
                  logo={prod.logo}
                  desc={prod.desc}
                  route={prod.route}   // ✅ pass route
                  className="active-card"
                  data-aos="fade-up"
                />
              ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {isMobile ? (
        <div className="product-nav-container">
          <button
            className="nav-arrow left-arrow"
            onClick={goLeft}
            aria-label="Previous category"
          >
            ‹
          </button>
          <button
            className="nav-arrow right-arrow"
            onClick={goRight}
            aria-label="Next category"
          >
            ›
          </button>
        </div>
      ) : (
        <>
          <button
            className="nav-arrow left-arrow"
            onClick={goLeft}
            aria-label="Previous category"
          >
            ‹
          </button>
          <button
            className="nav-arrow right-arrow"
            onClick={goRight}
            aria-label="Next category"
          >
            ›
          </button>
        </>
      )}
    </section>
  );
}


// Client section
function ClientsSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const clients = [
    { name: 'Shoka', logo: clientLogo1 },
    { name: 'DataMC', logo: clientLogo2 },
    { name: 'Microsoft', logo: clientLogo3 },
    { name: 'DDP Tech', logo: clientLogo4 },
  ];

  return (
    <section
      className={`clients-section ${inView ? 'light-theme-in-view' : ''}`}
      ref={sectionRef}
      aria-label="Our Clients"
    >
      <div className="clients-header" data-aos="fade-down">
        <h2>Our Partners</h2>
        <p>We’ve proudly partnered with some of the most respected organizations worldwide.</p>
      </div>

      <div className="clients-logos">
        {clients.map((client, i) => (
          <div
            key={i}
            className="client-logo-wrapper"
            data-aos="zoom-in"
            data-aos-delay={i * 100}
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              loading="lazy"
              className="client-logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

//Contact Section




const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <section className="simple-contact-section" id="contact">
      <div className="contact-wrapper">
        
        {/* Left Side - Text */}
        <div className="contact-content" data-aos="fade-right">
          <h2 className="contact-heading">
            Let's Connect
          </h2>

          <p className="contact-subtext">
            Want to know more about how we can help? Reach out to us directly.
          </p>

          <button
            className="contact-cta-btn"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            onClick={() => navigate("/contact")}
          >
            CONNECT WITH US
          </button>
        </div>

        {/* Right Side - Graphic */}
        <div className="contact-image" data-aos="fade-left">
          <img
            src={contactImg}
            alt="Contact Illustration"
          />
        </div>
      </div>
    </section>
  );
};





// Footer



const stories = [
  {
    id: "foley",
    title: "Foley CAT — Flawless Data Migration",
    teaser:
      "15 months, zero data loss, and a seamless NAXT365 upgrade. See how collaboration powered a perfect go-live.",
    to: "/stories/folycat",
    cover: coverFoley || foleyImg,
    tags: ["NAXT365", "Migration", "USA"],
  },
  {
    id: "norway",
    title: "Pon Power Norway & Equipment",
    teaser:
      "From trials to full deployment — a four-month transformation tailored for two Norwegian legal entities.",
    to: "/stories/pon-Norway-CAT",
    cover: coverNorway || bgImg,
    tags: ["Finance & Ops", "CutOver", "PreCut"],
  },
  {
    id: "netherlands",
    title: "Pon Power Netherlands — Project Completion",
    teaser:
      "A multi-year journey across four legal entities culminates in a modern NAXT 365 system.",
    to: "/stories/pon-Netherlands-CAT",
    cover: coverNL || bgImg,
    tags: ["ETL", "Go-Live", "Partnership"],
  },
  {
    id: "gecolsa",
    title: "Gecolsa — Smarter, Faster, Better",
    teaser:
      "Unlocking operational excellence with a clean migration path and measurable impact.",
    to: "/stories/gecolsa",
    cover: coverGecolsa || xaptImg,
    tags: ["Optimization", "LATAM", "NAXT365"],
  },
];

const StoryPage = () => {
  const navigate = useNavigate();

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("reveal-on")
        ),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Dark mode switcher
  useEffect(() => {
    const featured = document.querySelector(".featured-story");
    const page = document.querySelector(".stories-page");

    const ioDark = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            page.classList.add("dark-mode");
          } else {
            page.classList.remove("dark-mode");
          }
        });
      },
      { threshold: 0.4 }
    );

    if (featured) ioDark.observe(featured);
    return () => ioDark.disconnect();
  }, []);

  // helper function for navigation + scroll
  const goToPage = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="stories-page">
      {/* HERO */}
      <section
        className="stories-hero"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <h1 className="stories-hero-title">Our Stories of Success</h1>
          <p className="stories-hero-sub">
            Real projects. Real impact. Dive into transformation journeys powered
            by <span className="brand-accent">DDPTech</span>, our partners, and
            our clients.
          </p>
          <div className="hero-cta">
            <a href="#stories-grid" className="btn-primary">
              Explore Stories
            </a>
            <button
              onClick={() => goToPage("/contact")}
              className="btn-ghost"
            >
              Start Your Project
            </button>
          </div>
          <div className="hero-logos">
            <img src={poncatImg} alt="PonCAT" />
            <img src={xaptImg} alt="XAPT" />
            <img src={foleyImg} alt="Foley" />
          </div>
        </div>
      </section>

      {/* GRID */}
      <section id="stories-grid" className="stories-grid">
        {stories.map((s, idx) => (
          <div
            key={s.id}
            className={`story-card reveal d${(idx % 6) + 1}`}
            onClick={() => goToPage(s.to)}
            style={{ cursor: "pointer" }}
          >
            <div className="story-media">
              <img src={s.cover} alt={s.title} />
              <div className="story-overlay">
                <span className="story-read">Read story →</span>
              </div>
            </div>
            <div className="story-body">
              <h3>{s.title}</h3>
              <p>{s.teaser}</p>
              <div className="story-tags">
                {s.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* QUOTES */}
      <section className="stories-quotes reveal">
        <div className="quotes-track">
          <blockquote>
            “CutOver went flawlessly — best migration we’ve experienced.”
            <span>— Program Sponsor, Pon</span>
          </blockquote>
          <blockquote>
            “The NAXT365 upgrade delivered measurable value in weeks.”
            <span>— Ops Lead, Foley CAT</span>
          </blockquote>
          <blockquote>
            “True partnership. Fast decisions, clean execution.”
            <span>— Delivery Director, XAPT</span>
          </blockquote>
          <blockquote>
            “From chaos to clarity — our data is finally trusted.”
            <span>— CFO, Gecolsa</span>
          </blockquote>
        </div>
      </section>

    </div>
  );
};





// Footer

function Home() {
  const heroRef = useRef();
  const carouselRef = useRef();
  const servicesRef = useRef();
  const productsSectionRef = useRef();
  const contactSectionRef = useRef();
  const clientsSectionRef = useRef();
  const connectRef = useRef();

  const [darkMode, setDarkMode] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const location = useLocation();

  // ✅ Unified darkMode scroll handling
  useEffect(() => {
    const handleScroll = () => {
      if (
        !servicesRef.current ||
        !connectRef.current ||
        !contactSectionRef.current ||
        !clientsSectionRef.current
      )
        return;

      const windowHeight = window.innerHeight;

      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      const connectTop = connectRef.current.getBoundingClientRect().top;
      const connectBottom = connectRef.current.getBoundingClientRect().bottom;
      const servicesTop = servicesRef.current.getBoundingClientRect().top;
      const servicesBottom = servicesRef.current.getBoundingClientRect().bottom;
      const contactTop = contactSectionRef.current.getBoundingClientRect().top;
      const contactBottom = contactSectionRef.current.getBoundingClientRect().bottom;
      const clientsTop = clientsSectionRef.current.getBoundingClientRect().top;
      const clientsBottom = clientsSectionRef.current.getBoundingClientRect().bottom;

      // Priority order
      if (heroBottom > 0) {
        // Hero & Carousel → Light
        setDarkMode(false);
      } else if (servicesBottom <= 0 && connectTop < windowHeight && connectBottom > 0) {
        // ✅ Services fully gone & ConnectWithUs visible → Light
        setDarkMode(false);
      } else if (contactTop < windowHeight && contactBottom > 0) {
        // Smooth transition from Products → Contact
        const progress = Math.min(Math.max(1 - contactTop / windowHeight, 0), 1);
        setDarkMode(progress < 0.5);
      } else if (clientsTop < windowHeight && clientsBottom > 0) {
        // Clients section → Light
        setDarkMode(false);
      } else {
        // Services & Products → Dark
        setDarkMode(servicesTop <= windowHeight / 1.5);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll to requested section if navigation state says so
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      let targetEl = null;

      if (sectionId === "products-section") {
        targetEl = productsSectionRef.current;
      }
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }, 300); // delay so page renders first
      }
    }
  }, [location.state]);

  return (
    <>
      <Sidebar darkMode={darkMode} />

      <div className={`home-container ${darkMode ? "dark-mode" : "light-mode"}`}>
        {/* Hero Section */}
        <section className="hero-section light-theme" ref={heroRef}>
          <div className={`hero-text ${heroVisible ? "animate" : ""}`}>
            <h1>
              Limitless Possibilities Through Seamless Technology for a<br />
              <span className="highlight"> Reliable</span> and{" "}
              <span className="highlight"> Smarter Future.</span>
            </h1>
            <h2 className='home-subheading'>Revolutionize Your Business With Our Product</h2>
          </div>
        </section>

        {/* Carousel */}
        <div className="carousel-wrapper light-theme" ref={carouselRef}>
          <WhatsNewCarousel items={whatsNewItems} />
        </div>

        {/* Services */}
        <div ref={servicesRef}>
          <ServicesSection />
        </div>

        {/* Connect With Us (Achievements) */}
        <div ref={connectRef} id="connect-with-us">
          <ConnectWithUsSection />
        </div>

        {/* Products */}
        <div ref={productsSectionRef} id="products-section">
          <ProductsSection />
        </div>
        {/* News */}
        <div  id="news-section">
          {/* <News /> */}
        </div>

        {/* Contact */}
        <div ref={contactSectionRef}>
          <ContactSection />
        </div>

        {/* Clients */}
        <div ref={clientsSectionRef}>
          <ClientsSection />
        </div>

        <BackToTopButton />
      </div>
    </>
  );
}

export default Home;
