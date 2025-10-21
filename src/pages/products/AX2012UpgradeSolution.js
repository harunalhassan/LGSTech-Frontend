import React from "react";
import "../../styles/ProductDetail.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/dynamic365.png";
import { Rocket, FolderCog, Clock, CheckCircle } from "lucide-react"; // ✅ replaced FlaskConical with CheckCircle

const AX2012UpgradeSolution = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Smooth Upgrade Path",
      desc: "Upgrade from AX2012 to Dynamics 365 with minimal disruption and complete data consistency.",
      icon: <Rocket size={36} color="#d4ad00ff" />,
    },
    {
      title: "Data Fidelity",
      desc: "Preserve your existing configurations, customizations, and master data accurately.",
      icon: <FolderCog size={36} color="#d4ad00ff" />,
    },
    {
      title: "Downtime Reduction",
      desc: "Leverage our optimized upgrade flow to reduce downtime and business impact.",
      icon: <Clock size={36} color="#d4ad00ff" />,
    },
    {
      title: "Automated Testing",
      desc: "Automated validation scripts ensure the migrated environment performs flawlessly.",
      icon: <CheckCircle size={36} color="#d4ad00ff" />, // ✅ better representation for testing
    },
  ];

  return (
    <div className="product-detail-container">
      {/* Hero Section */}
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
            onClick={() => navigate("/contact")}
            data-aos="fade-up"
            data-aos-duration="900"
          >
            Get the Product
          </button>
        </div>

        <div
          className="hero-logo-right"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src={logo}
            alt="Dynamics 365 Logo"
            className="product-logo-extra-large"
          />
        </div>
      </section>

      {/* Key Features */}
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
