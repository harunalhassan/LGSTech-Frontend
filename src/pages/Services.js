import React, { useState } from "react";
import "../styles/Services.css";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      title: "ERP Vendor Evaluation",
      description:
        "We help businesses select the right ERP vendor by assessing stability, implementation expertise, customer support, cost transparency, and alignment with long-term goals. This ensures a reliable partnership with minimal risks.",
      details: [
        "Business requirements documentation",
        "Request for proposal (RFP) development",
        "ERP Business case development",
        "RFP responses evaluation and scoring",
        "RFP process management",
      ],
    },
    {
      title: "ERP Product Evaluation",
      description:
        "Our ERP Product Evaluation service systematically analyzes ERP solutions to identify the best fit for your business. We assess features, scalability, usability, cost, and vendor reliability for informed decision-making.",
      details: [
        "Organisation application landscape study",
        "Organisation technology landscape study",
        "Business requirements documentation",
        "Non-functional requirements documentation",
        "ERP Product evaluation and scoring",
        "ERP Product evaluation process management",
      ],
    },
    {
      title: "Microsoft Dynamics 365 Readiness Assessment",
      description:
        "We evaluate your organization’s readiness for Dynamics 365 adoption by assessing technology landscape, people, change management, and support services. The result is a tailored readiness dashboard and consulting report.",
      details: [
        "Application & technology landscape study",
        "People demography study",
        "Change readiness & support services study",
        "Readiness assessment report & dashboarding",
      ],
    },
    {
      title: "Microsoft Dynamics 365 Consulting Services",
      description:
        "Our Dynamics 365 experts provide consulting across Finance, SCM, Sales, Customer Service, Commerce, and more. We ensure scalability, security, and tailored solutions to maximize ROI from your ERP investments.",
      details: [
        "Finance, SCM, Commerce, Sales",
        "Project Management & Accounting",
        "Customer Service & Field Service",
        "Integration & Security",
        "Environment Strategy & Solution Architecture",
      ],
    },
    {
      title: "Microsoft Dynamics 365 Development Services",
      description:
        "We provide custom development and extensions for Dynamics 365, ensuring solutions are tailored to unique business needs. Using Azure DevOps best practices, we streamline build automation and ensure reliable delivery.",
      details: [
        "Product extension requirements",
        "Product extension design",
        "Custom development",
        "Azure DevOps build automation",
      ],
    },
    {
      title: "Microsoft Dynamics 365 Implementation Services",
      description:
        "From project initiation to deployment, we handle end-to-end D365 implementations. Our services cover configuration, integration, ISV management, testing, training, and change management to ensure smooth rollouts.",
      details: [
        "End-to-end implementation management",
        "Project initiation & PMO establishment",
        "Product configuration & deployment",
        "Power Platform & ISV integration",
        "Testing, training & change management",
      ],
    },
    {
      title: "Microsoft Dynamics 365 Program & Project Management",
      description:
        "We offer dedicated program and project management services for Dynamics 365 initiatives. Using Agile DevOps templates, we ensure projects are executed on time, within budget, and aligned with strategic goals.",
      details: [
        "Program management services",
        "Project management services",
        "Agile template-based DevOps management",
        "Deployment management services",
      ],
    },
    {
      title: "Microsoft Power Platform Development & Training",
      description:
        "We design and implement PowerApps, Automations, and PowerBI dashboards that help businesses streamline processes and make data-driven decisions. Training ensures your teams can maximize platform potential.",
      details: [
        "PowerApps design & implementation",
        "PowerAutomate workflows",
        "PowerBI dashboards & reporting",
      ],
    },
    {
      title: "Data Migration Services",
      description:
        "Our data migration services automate ETL processes, ensuring smooth transfer of data to Dynamics 365. With strategies for accuracy, consistency, and scalability, we reduce downtime and risks in migration projects.",
      details: [
        "End-to-end migration automation",
        "Data mapping & strategies",
        "ETL automation",
        "Full project management",
      ],
    },
    {
      title: "Finance & Accounting Services",
      description:
        "We provide back-office outsourcing solutions for finance and accounting using Dynamics 365, Xero, and Zoho Books. Our services ensure accurate, compliant, and efficient financial management for businesses.",
      details: [
        "D365 back-office outsourcing",
        "Xero outsourcing",
        "Zoho Books outsourcing",
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Our digital marketing services cover SEO-compliant websites, SEO optimization, and social media strategy. We help businesses boost online presence, engage customers, and achieve measurable marketing outcomes.",
      details: [
        "Social media strategy & marketing",
        "SEO compliant website development",
        "SEO services",
      ],
    },
  ];

  return (
    <section className="services-section">
      <div className="overlay"></div>

      <div className="services-container">
        <h3 className="serviceheading" data-aos="fade-down" data-aos-duration="1200">
          OUR SERVICES
        </h3>
        <h1 className="services-titles" data-aos="fade-up" data-aos-duration="1000">
          Empowering Businesses with Innovation and Technology
        </h1>

        <div className="services-grids">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-cards ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <div className="service-heading">
                <h2>{service.title}</h2>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>
              <p className="service-description">{service.description}</p>
              {activeIndex === index && (
                <ul className="service-details">
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
