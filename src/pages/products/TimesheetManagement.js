import React from "react";
import "../../styles/ProductDetail.css";
import { useNavigate } from "react-router-dom";
import { FaClock, FaCheckCircle, FaFileInvoiceDollar, FaChartBar } from "react-icons/fa";
import logo from "../../assets/logos/powerapp.png";

const TimesheetManagement = () => {
  const navigate = useNavigate();
  const iconColor = "#d4ad00ff";

  const features = [
    {
      title: "Seamless Time Tracking",
      desc: "Track working hours, overtime, and project time effortlessly across teams.",
      icon: <FaClock style={{ color: iconColor }} />,
    },
    {
      title: "Workflow Approvals",
      desc: "Automate timesheet approvals and notifications with integrated workflows.",
      icon: <FaCheckCircle style={{ color: iconColor }} />,
    },
    {
      title: "Project Billing Integration",
      desc: "Link timesheets with project billing for accurate and automated invoicing.",
      icon: <FaFileInvoiceDollar style={{ color: iconColor }} />,
    },
    {
      title: "Insightful Analytics",
      desc: "Gain real-time visibility into employee utilization and project progress.",
      icon: <FaChartBar style={{ color: iconColor }} />,
    },
  ];

  return (
    <div className="product-detail-container">
      {/* Hero Section */}
      <section className="product-hero split-hero">
        <div className="hero-content-left">
          <h1>Timesheet Management Solution</h1>
          <p>
            Track, manage, and approve employee timesheets with ease. Automate
            workflows and connect with billing systems to improve productivity.
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
        <h2>Ready to Simplify Time Management?</h2>
        <p>
          Automate tracking, approvals, and reporting in one unified platform.
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

export default TimesheetManagement;
