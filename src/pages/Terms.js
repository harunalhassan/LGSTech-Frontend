import React from "react";
import "../styles/Terms.css"; // optional styling

function Terms() {
  return (
    <div className="page terms">
      <h1>Terms of Service</h1>
      <p>Last updated: January 2025</p>

      <section>
        <h2>Introduction</h2>
        <p>
          By accessing or using the services provided by LGS Business Consulting,
          you agree to comply with these Terms of Service. If you do not agree,
          please discontinue use of our website and services.
        </p>
      </section>

      <section>
        <h2>Use of Services</h2>
        <p>
          Our services include ERP consulting, Microsoft Dynamics 365 solutions,
          data migration, digital marketing, and back-office outsourcing. Users
          agree not to misuse our services, attempt unauthorized access, or
          disrupt operations.
        </p>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          All website content, case studies, articles, and branding are the
          property of LGS and its partners. You may not reproduce or distribute
          without written permission.
        </p>
      </section>

      <section>
        <h2>Limitations of Liability</h2>
        <p>
          LGS provides services on a best-effort basis. We are not liable for
          indirect, incidental, or consequential damages, or for issues caused by
          third-party integrations beyond our control.
        </p>
      </section>

      <section>
        <h2>Termination</h2>
        <p>
          We reserve the right to suspend or terminate services in case of
          violations of these Terms, misuse of solutions, or illegal activity.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          These Terms are governed by the laws of India. Any disputes shall be
          resolved under the jurisdiction of Bangalore courts.
        </p>
      </section>
    </div>
  );
}

export default Terms;
