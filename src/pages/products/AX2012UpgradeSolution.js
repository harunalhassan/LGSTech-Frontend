import React from "react";
import "../../styles/ProductDetail.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/dynamic365.png";

const AX2012UpgradeSolution = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Smooth Upgrade Path",
      desc: "Upgrade from AX2012 to Dynamics 365 with minimal disruption and complete data consistency.",
      icon: "🚀",
    },
    {
      title: "Data Fidelity",
      desc: "Preserve your existing configurations, customizations, and master data accurately.",
      icon: "📂",
    },
    {
      title: "Downtime Reduction",
      desc: "Leverage our optimized upgrade flow to reduce downtime and business impact.",
      icon: "⏱️",
    },
    {
      title: "Automated Testing",
      desc: "Automated validation scripts ensure the migrated environment performs flawlessly.",
      icon: "🧪",
    },
  ];

  return (
    <div className="product-detail-container">
      <section className="product-hero split-hero">
        <div className="hero-content-left">
          <h1>AX2012 to Dynamics 365 Upgrade Solution</h1>
          <p>
            Upgrade from AX2012 to Dynamics 365 with confidence. Ensure data
            fidelity, maintain business continuity, and modernize operations
            with zero data loss.
          </p>
          <button
            className="get-product-btn hero-btn"
            onClick={() => navigate("/contact")}data-aos="fade-up"data-aos-duration="900"
          >
            Get the Product
          </button>
        </div>

        <div className="hero-logo-right" data-aos="fade-left"data-aos-duration="1000">
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

      <section className="productDetails-cta" data-aos="fade-up">
        <h2>Upgrade Smarter. Migrate Faster.</h2>
        <p>Empower your business with a smooth upgrade path to Dynamics 365.</p>
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

export default AX2012UpgradeSolution;
