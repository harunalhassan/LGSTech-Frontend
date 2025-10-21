import React from "react";
import "../../styles/ProductDetail.css";
import { useNavigate } from "react-router-dom";
import {
  FaFileInvoiceDollar,
  FaMobileAlt,
  FaFileAlt,
  FaLink,
} from "react-icons/fa"; // icons
import logo from "../../assets/logos/powerapp.png"; // replace with actual logo

const FixedAssets = () => {
  const navigate = useNavigate();
  const iconColor = "#d4ad00ff";

  const features = [
    {
      title: "Automated Auditing",
      desc: "Perform asset audits efficiently using barcode or QR code scanning.",
      icon: <FaFileInvoiceDollar style={{ color: iconColor }} />,
    },
    {
      title: "Mobile Inventory Tracking",
      desc: "Easily update, verify, and reconcile assets using mobile devices.",
      icon: <FaMobileAlt style={{ color: iconColor }} />,
    },
    {
      title: "Reconciliation Reports",
      desc: "Generate instant variance reports for missing or moved assets.",
      icon: <FaFileAlt style={{ color: iconColor }} />,
    },
    {
      title: "Integration Ready",
      desc: "Seamlessly connect with ERP systems for real-time asset updates.",
      icon: <FaLink style={{ color: iconColor }} />,
    },
  ];

  return (
    <div className="product-detail-container">
      {/* Hero Section */}
      <section className="product-hero split-hero">
        <div className="hero-content-left">
          <h1>Fixed Assets Stocktake Solution</h1>
          <p>
            Audit, reconcile, and monitor fixed assets with ease using mobile-assisted
            inventory and automated reporting.
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
            alt="PowerApps Logo"
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

      {/* CTA */}
      <section className="productDetails-cta">
        <h2>Ready to Automate Asset Tracking?</h2>
        <p>Achieve faster, more accurate stocktakes with mobile automation.</p>
        <button className="get-product-btn" onClick={() => navigate("/contact")}>
          Get the Product
        </button>
      </section>
    </div>
  );
};

export default FixedAssets;
