import React from "react";
import "../../styles/ProductDetail.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/dynamic365.png";

const LegacyApplication = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Seamless Archival",
      desc: "Migrate legacy datasets into Microsoft Fabric without losing searchability.",
      icon: "📦",
    },
    {
      title: "Data Compression",
      desc: "Optimize storage with high-efficiency compression and minimal retention cost.",
      icon: "🗜️",
    },
    {
      title: "Searchable Retention",
      desc: "Retain archived data with fast retrieval and indexing support.",
      icon: "🔍",
    },
    {
      title: "Compliance Ready",
      desc: "Ensure compliance with data privacy, retention, and audit policies.",
      icon: "✅",
    },
  ];

  return (
    <div className="product-detail-container">
      <section className="product-hero split-hero">
        <div className="hero-content-left">
          <h1>Legacy Application to Fabric Data Archive Solution</h1>
          <p>
            Archive your legacy datasets into Microsoft Fabric with efficient
            compression, retention, and full searchability for analytics and
            audits.
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

      <section className="productDetails-cta">
        <h2>Modernize Your Data Archival Strategy</h2>
        <p>
          Transition legacy data into Microsoft Fabric for secure, scalable, and
          intelligent storage.
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

export default LegacyApplication;
