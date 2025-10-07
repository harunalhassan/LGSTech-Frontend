import React from "react";
import "../../styles/ProductDetail.css";
import { useNavigate } from "react-router-dom";
import azureLogo from "../../assets/logos/icons8-azure-48.png"; // replace with your Azure logo

const AzureDevOps = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Automated Pipelines",
      desc: "Pre-built CI/CD templates optimized for Dynamics 365 development and deployment.",
      icon: "🚀",
    },
    {
      title: "Work Item Governance",
      desc: "Seamlessly link Azure Boards with D365 projects for transparent tracking and collaboration.",
      icon: "📋",
    },
    {
      title: "Release Orchestration",
      desc: "Streamlined multi-environment deployment with approval workflows and rollback safety.",
      icon: "⚙️",
    },
    {
      title: "Performance Insights",
      desc: "Monitor project KPIs, build health, and pipeline metrics through real-time dashboards.",
      icon: "📊",
    },
  ];

  return (
    <div className="product-detail-container">
      {/* Hero Section */}
      <section className="product-hero split-hero">
        <div className="hero-content-left">
          <h1>Azure DevOps Toolkit for Microsoft Dynamics 365 Project Management</h1>
          <p>
            Integrate pipelines, work item governance, and release orchestration — all tailored for D365
            project delivery. Accelerate DevOps efficiency with built-in automation and insights.
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
            src={azureLogo}
            alt="Azure DevOps Logo"
            className="product-logo-extra-large"
          />
        </div>
      </section>

      {/* Features Section */}
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
        <h2>Empower Your DevOps for Dynamics 365</h2>
        <p>
          Streamline builds, deployments, and project visibility with the Azure DevOps Toolkit designed
          for modern D365 projects.
        </p>
        <button className="get-product-btn" onClick={() => navigate("/contact")}>
          Get the Product
        </button>
      </section>
    </div>
  );
};

export default AzureDevOps;
