import React from "react";
import "../../styles/ProductDetail.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/dynamic365.png"; // replace with your logo

const D365DataMigration = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "End-to-End Automation",
      desc: "Complete migration automation with pre-validation and post-migration testing.",
      icon: "⚙️",
    },
    {
      title: "Rollback & Recovery",
      desc: "Secure rollback and instant recovery in case of migration issues.",
      icon: "🔄",
    },
    {
      title: "Real-Time Validation",
      desc: "Continuous monitoring and validation ensure high data accuracy.",
      icon: "📊",
    },
    {
      title: "Complex Data Support",
      desc: "Handles large data models, hierarchies, and entity relationships effortlessly.",
      icon: "💾",
    },
  ];

  return (
    <div className="product-detail-container">
      {/* Hero Section */}
      <section className="product-hero split-hero">
        <div className="hero-content-left">
          <h1>Microsoft Dynamics 365 Data Migration Solution</h1>
          <p>
            Move to the cloud with confidence. Experience seamless migration,
            validation, and automation with Dynamics 365.
          </p>
          <button className="get-product-btn hero-btn" onClick={() => navigate("/contact")}data-aos="fade-up"data-aos-duration="900">
            Get the Product
          </button>
        </div>

        <div className="hero-logo-right" data-aos="fade-left"data-aos-duration="1000">
          <img src={logo} alt="Dynamics 365 Logo" className="product-logo-extra-large" />
        </div>
      </section>

      {/* Overview Section
      <section className="product-overview">
        <h2>Why Choose Our Migration Solution?</h2>
        <p>
          Our <strong>Microsoft Dynamics 365 Data Migration Solution</strong> ensures a smooth, secure, and
          automated transition to Dynamics 365. It maintains data fidelity while minimizing downtime through
          advanced validation and rollback support.
        </p>
      </section> */}

      {/* Key Features Section */}
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

      {/* CTA Section */}
      <section className="productDetails-cta">
        <h2>Ready to Migrate with Confidence?</h2>
        <p>Let’s streamline your Dynamics 365 migration with automation and reliability.</p>
        <button className="get-product-btn" onClick={() => navigate("/contact")}>
          Get the Product
        </button>
      </section>
    </div>
  );
};

export default D365DataMigration;
