import React from "react";
import "../../styles/ProductDetail.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/dynamic365.png";

const NAXT2012toNAXT365Solution = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Unified Business Platform",
      desc: "Upgrade to an all-in-one DMS integrating sales, rental, service, parts, finance, and CRM.",
      icon: "🏢",
    },
    {
      title: "Enhanced Integration",
      desc: "Seamlessly connect with Power BI, IoT, and Microsoft Azure for smarter operations.",
      icon: "🔗",
    },
    {
      title: "Minimal Downtime",
      desc: "Maintain business continuity with optimized migration tools and sandbox testing.",
      icon: "🕒",
    },
    {
      title: "Industry Proven",
      desc: "Trusted by equipment dealers and rental businesses globally for reliability and performance.",
      icon: "🌍",
    },
  ];

  return (
    <div className="product-detail-container">
      <section className="product-hero split-hero">
        <div className="hero-content-left">
          <h1>NAXT 2012 to NAXT365 Upgrade Solution</h1>
          <p>
            Built on Microsoft Dynamics 365, NAXT365 unifies every business
            process for equipment dealers — modernizing operations with agility
            and intelligence.
          </p>
          <button
            className="get-product-btn hero-btn"
            onClick={() => navigate("/contact")}data-aos="fade-up"data-aos-duration="900"
          >
            Get the Product
          </button>
        </div>

        <div className="hero-logo-right"data-aos="fade-left"data-aos-duration="1000">
          <img
            src={logo}
            alt="Dynamics 365 Logo"
            className="product-logo-extra-large"
          />
        </div>
      </section>

      <section className="product-features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="productDetails-cta">
        <h2>Upgrade to the Future of Dealership Management</h2>
        <p>
          Empower your organization with NAXT365 — integrated, intelligent, and
          industry-ready.
        </p>
        <button
          className="get-product-btn"
          onClick={() => navigate("/contact")}
        >
          Get the Product
        </button>
      </section>
    </div>
  );
};

export default NAXT2012toNAXT365Solution;
