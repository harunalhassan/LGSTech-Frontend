import React from 'react';
import { Link } from "react-router-dom";

// --- SVG Icon Components ---
// These remain the same as they are independent of the styling method.
const IconWrapper = ({ children }) => (
  <div className="icon-wrapper">
    {children}
  </div>
);

const ManagementIcon = () => (
    <svg xmlns="http://www.w.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
);
const TeamIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const ReportIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
);
const PmoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
);
const DevOpsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v12"/><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M15 6a9 9 0 0 0-9 9"/><path d="M18 15v6"/><path d="M21 18h-6"/></svg>
);
const ConfigIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
);
const DevelopmentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="14" y="14" rx="1"/><path d="M10.4 10.4a3 3 0 0 0-1.9-2.8 3 3 0 0 0-3.3 1.3 3 3 0 0 0-1.4 3.2 3 3 0 0 0 2.8 1.9"/><rect width="7" height="7" x="3" y="14" rx="1"/><path d="M3 7h7v7"/><path d="M14 3h7v7"/></svg>
);
const DeploymentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.05a2.46 2.46 0 0 0-3.05-.05zm15-15c1.5-1.26 2-5 2-5s-3.74.5-5 2c-.71.84-.7 2.3-.05 3.05a2.46 2.46 0 0 0 3.05.05z"/><path d="M7 14a6 6 0 0 1-3-3L3 3l3.5 3.5A6 6 0 0 1 14 7"/><path d="M14 7a6 6 0 0 1 3 3l1 8-3.5-3.5A6 6 0 0 1 7 14"/></svg>
);
const IntegrationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/><path d="m14 14-4 4"/><path d="M14 18h-4"/></svg>
);
const PowerPlatformIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m13 22-4-8 6-6-4 8"/></svg>
);
const VendorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/><path d="M7 11.5a1.5 1.5 0 0 0 3 0v-1a1.5 1.5 0 0 0-3 0V12a1.5 1.5 0 0 0 3 0v-1a1.5 1.5 0 0 0-3 0"/><path d="M13 5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"/><path d="M17 9.5a1.5 1.5 0 0 0-3 0v1a1.5 1.5 0 0 0 3 0V9a1.5 1.5 0 0 0-3 0v1a1.5 1.5 0 0 0 3 0"/></svg>
);
const IsvIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
);
const TestingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"/><path d="M14 9.31V2"/><path d="M8.5 2h7"/><path d="m6 16 1.7-1.7a.5.5 0 0 0 0-.7L6 12l.7-.7a.5.5 0 0 1 .7 0L9 13l.7-.7a.5.5 0 0 0 0-.7L8 10l.7-.7a.5.5 0 0 1 .7 0L11 11l.7-.7a.5.5 0 0 0 0-.7L10 8l1.7-1.7a.5.5 0 0 1 .7 0L14 8l.7.7a.5.5 0 0 0 .7 0L17 7l.7.7a.5.5 0 0 1 0 .7L16 9.5l-1.7 1.7a.5.5 0 0 0 0 .7l1.7 1.7.7.7a.5.5 0 0 1 0 .7l-1.7 1.7-1.7-1.7a.5.5 0 0 0-.7 0l-1.7 1.7-.7-.7a.5.5 0 0 1 0-.7L12.5 16l.7-.7a.5.5 0 0 0 0-.7L11.5 13l-1.7 1.7a.5.5 0 0 1-.7 0L7.5 13l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5Z"/><path d="M8.5 22h7"/></svg>
);
const TrainingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="M7 21h10"/><path d="M12 16v5"/></svg>
);

export default function App() {
  const services = [
    { title: "End-to-End Management", icon: <ManagementIcon /> },
    { title: "Project Initiation & Team Mobilisation", icon: <TeamIcon /> },
    { title: "Board Approvals & Periodic Reporting", icon: <ReportIcon /> },
    { title: "PMO Establishment", icon: <PmoIcon /> },
    { title: "Azure DevOps Setup", icon: <DevOpsIcon /> },
    { title: "Product Configuration Management", icon: <ConfigIcon /> },
    { title: "Product Development Management", icon: <DevelopmentIcon /> },
    { title: "Product Deployment Cycles Management", icon: <DeploymentIcon /> },
    { title: "Integration Services Management", icon: <IntegrationIcon /> },
    { title: "Power Platform Integration", icon: <PowerPlatformIcon /> },
    { title: "Third-Party Vendor Services Management", icon: <VendorIcon /> },
    { title: "ISV Solution & Deployment Management", icon: <IsvIcon /> },
    { title: "Testing Services Management", icon: <TestingIcon /> },
    { title: "Change & Training Services Management", icon: <TrainingIcon /> },
  ];

  const pageStyles = `
    :root {
      --slate-50: #f8fafc;
      --slate-100: #f1f5f9;
      --slate-300: #cbd5e1;
      --slate-400: #94a3b8;
      --slate-600: #475569;
      --slate-800: #1e293b;
      --slate-900: #0f172a;
      --lime-100: #f0fdf4;
      --lime-400: #a3e635;
      --lime-500: #84cc16;
      --lime-600: #65a30d;
      --white: #ffffff;
    }

    /* --- Global Styles --- */
    .dynamics-page {
      background-color: var(--slate-50);
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      color: var(--slate-800);
      margin-top:100px;
    }
    
    .container {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    
    /* --- Header / Hero Section --- */
    .hero-section {
      position: relative;
      background-color: var(--slate-900);
      color: var(--white);
      padding-top: 6rem;
      padding-bottom: 6rem;
    }

    .hero-bg-image {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      opacity: 0.2;
    }

    .hero-bg-gradient {
      position: absolute;
      inset: 0;
      background-image: linear-gradient(to top, var(--slate-900), rgba(15, 23, 42, 0.8), transparent);
    }

    .hero-content {
      position: relative;
      z-index: 10;
      text-align: center;
    }

    .hero-content h1, .hero-content h2 {
      font-size: 2.25rem;
      font-weight: 800;
      letter-spacing: -0.025em;
    }
    
    .hero-content h1 {
      color: var(--lime-400);
    }
    
    .hero-content h2 {
       margin-top: 0.5rem;
    }

    .hero-content p {
      margin-top: 1.5rem;
      max-width: 48rem;
      margin-left: auto;
      margin-right: auto;
      font-size: 1.125rem;
      line-height: 2rem;
      color: var(--slate-300);
    }
    
    .hero-buttons {
      margin-top: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
    }
    
    .hero-buttons .btn-primary {
      border-radius: 0.375rem;
      background-color: var(--lime-500);
      padding: 0.75rem 1rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--white);
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      text-decoration: none;
      transition: background-color 0.3s;
    }
    
    .hero-buttons .btn-primary:hover {
      background-color: var(--lime-600);
    }
    
    .hero-buttons .btn-secondary {
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 1.5rem;
      color: var(--slate-300);
      text-decoration: none;
    }

    .hero-buttons .btn-secondary:hover {
        color: var(--white);
    }
    
    /* --- Services Section --- */
    .implementation-services, .why-us-section {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
    .section-header {
        max-width: 42rem;
        margin-left: auto;
        margin-right: auto;
    }
    .section-header.text-center {
        text-align: center;
    }
    .section-header .eyebrow {
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.75rem;
        color: var(--lime-600);
    }
    .section-header .title {
        margin-top: 0.5rem;
        font-size: 1.875rem;
        font-weight: 700;
        letter-spacing: -0.025em;
        color: var(--slate-900);
    }
    .section-header .subtitle {
        margin-top: 1.5rem;
        font-size: 1.125rem;
        line-height: 2rem;
        color: var(--slate-600);
    }
    
    .services-layout-container {
      margin-top: 4rem;
      max-width: 42rem;
      margin-left: auto;
      margin-right: auto;
    }
    
    .services-card-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
    
    .implementation-service-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 1.5rem;
      background-color: var(--white);
      border-radius: 0.75rem;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
      border: 1px solid var(--slate-100);
      transition: all 0.3s ease-in-out;
    }
    
    .implementation-service-item:hover {
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
      transform: translateY(-4px);
    }
    
    .icon-wrapper {
      background-color: var(--lime-100);
      color: var(--lime-600);
      border-radius: 9999px;
      padding: 0.75rem;
      margin-bottom: 1rem;
      display: inline-flex;
    }
    
    .implementation-service-item h3 {
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 1.75rem;
      color: var(--slate-900);
    }

    /* --- Why Choose Us Section --- */
    .why-us-section {
      background-color: var(--white);
    }
    .why-us-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 4rem;
        align-items: center;
    }
    .why-us-content ul {
        margin-top: 2rem;
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .why-us-content li {
        display: flex;
        gap: 0.75rem;
    }
    .why-us-content li svg {
        margin-top: 0.25rem;
        height: 1.25rem;
        width: 1.25rem;
        flex-shrink: 0;
        color: var(--lime-500);
    }
    .why-us-content li strong {
        font-weight: 600;
        color: var(--slate-900);
    }
    .why-us-image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.75rem;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
    }

    
    /* --- Responsive Design --- */
    @media (min-width: 640px) {
      .hero-section {
        padding-top: 8rem;
        padding-bottom: 8rem;
      }
      .hero-content h1, .hero-content h2 {
        font-size: 3rem;
      }
      .implementation-services, .why-us-section {
        padding-top: 7rem;
        padding-bottom: 7rem;
      }
      .section-header .title {
        font-size: 2.25rem;
      }
       .services-layout-container {
         margin-top: 5rem;
       }
    }
    
    @media (min-width: 768px) {
      .services-card-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .container {
        max-width: 1280px;
        padding-left: 2rem;
        padding-right: 2rem;
      }
      .hero-content h1, .hero-content h2 {
        font-size: 3.75rem;
      }
      .services-layout-container {
         max-width: none;
         margin-top: 6rem;
      }
      .services-card-grid {
        grid-template-columns: repeat(3, 1fr);
      }
      .section-header {
         text-align: left;
      }
      .section-header.text-center {
        text-align: center;
      }
      .why-us-grid {
         grid-template-columns: repeat(2, 1fr);
      }
      .why-us-content {
         order: 1;
      }
       .why-us-image-wrapper {
         order: 2;
       }
    }
    
    @media (min-width: 1280px) {
        .services-card-grid {
           grid-template-columns: repeat(4, 1fr);
        }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <div className="dynamics-page">
        {/* Hero Section */}
        <header className="hero-section">
          <div
            className="hero-bg-image"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop')" }}>
          </div>
          <div className="hero-bg-gradient"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Microsoft Dynamics 365</h1>
              <h2>Implementation Services</h2>
              <p>
                From project initiation to deployment, we handle end-to-end D365 implementations. Our services cover configuration, integration, ISV management, testing, training, and change management to ensure smooth rollouts.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn-primary">
                  Request a Consultation
                </Link>
                <Link to="/services" className="btn-secondary">
                  Learn more <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Services Section */}
          <section className="implementation-services">
            <div className="container">
              <div className="section-header text-center">
                <h2 className="eyebrow">Our Comprehensive Approach</h2>
                <p className="title">
                  Everything You Need for a Successful Implementation
                </p>
                <p className="subtitle">
                  We provide a structured, full-service implementation process to ensure your Dynamics 365 solution is a perfect fit for your business needs.
                </p>
              </div>

              <div className="services-layout-container">
                <div className="services-card-grid">
                  {services.map((service, index) => (
                    <div key={index} className="implementation-service-item">
                      <IconWrapper>{service.icon}</IconWrapper>
                      <h3>{service.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="why-us-section">
            <div className="container">
              <div className="why-us-grid">
                <div className="why-us-content">
                  <div className="section-header">
                     <h2 className="eyebrow">Your Trusted Partner</h2>
                     <p className="title">Expert Guidance at Every Step</p>
                     <p className="subtitle">
                       Our dedicated team of certified Dynamics 365 professionals ensures your project's success through meticulous planning, transparent communication, and unparalleled technical expertise. We don't just implement software; we build lasting business solutions.
                     </p>
                  </div>
                  <ul>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                      <span><strong>Proven Methodology:</strong> A clear, phased approach from discovery to post-launch support.</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                      <span><strong>Seamless Integration:</strong> Expert handling of Power Platform, Azure, and third-party systems.</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                      <span><strong>User Adoption Focus:</strong> Comprehensive training and change management to empower your teams.</span>
                    </li>
                  </ul>
                </div>
                <div className="why-us-image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
                    alt="Professional team collaborating"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

      </div>
    </>
  );
}

