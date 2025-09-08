import React from "react";
import "../styles/HelpCenter.css"; // optional styling

function HelpCenter() {
  return (
    <div className="page help-center">
      <h1>Help Center</h1>
      <p>
        Welcome to the LGSTech Help Center. Here you’ll find answers to common
        questions about our services and solutions.
      </p>

      <section>
        <h2>Getting Started</h2>
        <h3>What is ERP Product Evaluation?</h3>
        <p>
          ERP Product Evaluation is the process of systematically analysing and
          comparing different ERP software solutions to determine which best fits
          the needs of an organization. It helps ensure scalability, cost
          efficiency, and long-term success.
        </p>

        <h3>What is ERP Vendor Evaluation?</h3>
        <p>
          ERP Vendor Evaluation involves assessing potential ERP software
          providers by reviewing their stability, support, implementation
          expertise, and alignment with your business goals.
        </p>
      </section>

      <section>
        <h2>Services FAQs</h2>
        <h3>What is Data Migration?</h3>
        <p>
          Data migration is the process of transferring data between systems.
          LGSTech uses automation, mapping, and integrity checks to ensure
          accurate and secure migration.
        </p>

        <h3>What is a Dynamics 365 Readiness Assessment?</h3>
        <p>
          It is a comprehensive study of your organization’s applications,
          technology, people, and support processes to determine readiness for
          Dynamics 365 implementation.
        </p>

        <h3>What are D365 Security Services?</h3>
        <p>
          Our D365 Security Services optimize the security framework for
          Microsoft Dynamics 365 Finance & Operations. We provide role-based
          access control, compliance management, and ongoing monitoring.
        </p>
      </section>

      <section>
        <h2>Common Issues</h2>
        <p>
          <strong>Q:</strong> Can LGSTech integrate Microsoft Power Platform and
          Dynamics 365? <br />
          <strong>A:</strong> Yes. We provide PowerApps, PowerAutomate, and
          PowerBI integration with D365 for end-to-end business automation and
          analytics.
        </p>

        <p>
          <strong>Q:</strong> How does LGSTech ensure data security? <br />
          <strong>A:</strong> We use encryption (TLS 1.2+), BYOK, Data Loss
          Prevention (DLP), and advanced monitoring with Microsoft Defender.
        </p>
      </section>
    </div>
  );
}

export default HelpCenter;
