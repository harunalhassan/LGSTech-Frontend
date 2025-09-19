import React from 'react';

// --- SVG Icon Components ---
// These remain the same as they are self-contained.

const ShieldCheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
);
const UserCheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>
);
const FingerprintIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" /><path d="M14 13.12c0-1.07.1-2.63.22-4.12" /><path d="M17.29 11.2a2.5 2.5 0 0 0-2.29-2.2" /><path d="M20 16.82c.31-.31.59-.65.8-1.02" /><path d="M4.93 11.26a10.06 10.06 0 0 1 0-2.52" /><path d="M7.42 8.7a4.99 4.99 0 0 0-2.42 2.5" /><path d="M18.7 19.34c.3-.7.44-1.46.44-2.24" /><path d="M9.17 17.27a4.42 4.42 0 0 1-3.27-1.57" /><path d="M12 22a10 10 0 0 0 7.07-2.93" /><path d="M4.2 16.33a10.02 10.02 0 0 1-2.1-7.06" /><path d="M12 2a10 10 0 0 0-7.07 2.93" /></svg>
);
const LockKeyholeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="16" r="1" /><rect x="3" y="10" width="18" height="12" rx="2" /><path d="M7 10V7a5 5 0 0 1 10 0v3" /></svg>
);
const GraduationCapIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>
);
const DatabaseZapIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M16 12l-4 6h6l-4 6"/></svg>
);
const ClipboardPenLineIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
);
const LaptopIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55A1 1 0 0 1 20.28 20H3.72a1 1 0 0 1-.9-1.45L4 16"/></svg>
);
const ShieldAlertIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
);
const WrenchIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
);


// --- Main Page Component ---
export default function D365SecurityPage() {

    const securityPractices = [
        { icon: UserCheckIcon, title: "i. Role-Based Security Model (RBSM)", description: "We can restrict access to enterprise data by using a role-based security model where users can be provided access to the system or file based on different roles. Ex: Admin, manager, lead, Guest." },
        { icon: FingerprintIcon, title: "ii. Authentication and Access Control", description: "We can authenticate users using passwords, PINs, biometrics and more. Multifactor Authentication can be used to add an additional layer of security. This can be integrated with popular connectors. This can use Integrated (Windows Authentication), Azure AD, or BYOK (Bring Your Own Key). Attribute-Based access control and mandatory access control can also be implemented." },
        { icon: LockKeyholeIcon, title: "iii. Data Encryption and Protection", description: "Microsoft Platform DLP policies allows defining entities, such as the Fort-Knox-based Data Salsa, at rest. This can be integrated with Microsoft Defender for advanced monitoring and TLS 1.2 for data in transit." },
        { icon: ShieldCheckIcon, title: "iv. Audit and Monitoring", description: "Integration with Data Loss Prevention (DLP) in D365. Detects sensitive such as user, timestamp, and operation, and credit information, and applies and restricts shares like phishing attempts." },
        { icon: GraduationCapIcon, title: "v. Educate Prevention", description: "Provide training materials, workshops, and regular communication to users about security policies, and inform users of security policies and conduct periodic security training sessions on identifying and avoiding phishing attacks." },
        { icon: DatabaseZapIcon, title: "vi. Data Classification and Data Loss Prevention (DLP)", description: "Classify data based on sensitivity and apply appropriate security controls. Implement DLP policies to prevent unauthorized sharing of sensitive data. D365 has built-in tools for data classification and DLP." },
        { icon: ClipboardPenLineIcon, title: "vii. Security Policies and Procedures", description: "Establish and enforce clear security policies and procedures for all users. This includes password policies, data handling procedures, and acceptable use policies." },
        { icon: LaptopIcon, title: "viii. Secure Configuration", description: "Ensure that all D365 applications and underlying platforms are securely configured. This includes disabling unnecessary services, applying security baselines, and regularly reviewing configurations." }
    ];

    const introCards = [
        { title: "Comprehensive Role-Based Security", description: "Implement granular access controls ensuring users only see the data relevant to their role.", imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" },
        { title: "Proactive Threat Monitoring", description: "Leverage advanced tools like Microsoft Defender to audit, monitor, and protect your data in real-time.", imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" },
        { title: "Robust Data Encryption", description: "Protect your data both at rest and in transit with industry-standard encryption protocols like TLS 1.2.", imageUrl: "https://images.unsplash.com/photo-1667372283587-e1557c08aca4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ];

  return (
    <>
      <style>{`
        /* --- Global & Body Styles --- */
        .d365-security-page {
            margin-top: 170px;
            background-color: #F9FAFB;
            color: #1F2937;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }

        /* --- Utility Classes --- */
        .container {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        @media (min-width: 640px) { .container { max-width: 640px; } }
        @media (min-width: 768px) { .container { max-width: 768px; } }
        @media (min-width: 1024px) { .container { max-width: 1024px; } }
        @media (min-width: 1280px) { .container { max-width: 1280px; } }

        /* --- Hero Section --- */
        .hero-section {
            position: relative;
            background-color: #0c7a71ff;
            color: white;
            padding: 2rem;
            overflow: hidden;
        }

        .hero-overlay {
            position: absolute;
            inset: 0;
            background-color: black;
            opacity: 0.3;
        }

        .hero-bg {
            position: absolute;
            inset: 0;
            background-image: url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80');
            background-size: cover;
            background-position: center;
            opacity: 0.1;
        }

        .hero-content {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            text-align: center;
        }

        .hero-icon {
            height: 6rem;
            width: 6rem;
            color: #6EE7B7;
        }

        .hero-text h1 {
            font-size: 2.25rem;
            line-height: 2.5rem;
            font-weight: 700;
            letter-spacing: -0.025em;
        }

        .hero-text p {
            margin-top: 1rem;
            font-size: 1.125rem;
            line-height: 1.75rem;
            color: #D1FAE5;
            max-width: 48rem;
        }

        /* --- Main Content --- */
        .main-content {
            padding-top: 2rem;
            padding-bottom: 2rem;
        }

        /* --- Intro Cards Section --- */
        .intro-cards-section {
            margin-top: 3rem;
            margin-bottom: 3rem;
        }

        .intro-cards-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
        }

        .intro-card {
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            overflow: hidden;
            transition: transform 0.3s ease-in-out;
        }

        .intro-card:hover {
            transform: translateY(-0.5rem);
        }

        .intro-card-img {
            width: 100%;
            height: 10rem;
            object-fit: cover;
        }

        .intro-card-content {
            padding: 1.5rem;
        }

        .intro-card-content h3 {
            font-size: 1.25rem;
            line-height: 1.75rem;
            font-weight: 700;
            color: #134E4A;
            margin-bottom: 0.5rem;
        }

        .intro-card-content p {
            color: #4B5563;
        }

        /* --- Practices Section --- */
        .practices-section {
            background-color: white;
            padding: 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .practices-section h2 {
            font-size: 1.875rem;
            line-height: 2.25rem;
            font-weight: 700;
            margin-bottom: 2rem;
            text-align: center;
            color: #115E59;
        }

        .practices-list {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .practice-item {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
            padding: 1rem;
            border-left: 4px solid #0f8e7fff;
            background-color: #F9FAFB;
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
        }

        .practice-icon-wrapper {
            flex-shrink: 0;
            background-color: #A7F3D0;
            padding: 0.75rem;
            border-radius: 9999px;
        }

        .practice-icon {
            height: 2rem;
            width: 2rem;
            color: #047857;
        }

        .practice-details h3 {
            font-size: 1.25rem;
            line-height: 1.75rem;
            font-weight: 600;
            color: #111827;
        }

        .practice-details p {
            margin-top: 0.25rem;
            color: #4B5563;
        }

       
        /* --- Responsive Adjustments --- */
        @media (min-width: 640px) {
            .practice-item {
                flex-direction: row;
                align-items: center;
            }
        }

        @media (min-width: 768px) {
            .hero-section { padding: 4rem; }
            .hero-content { flex-direction: row; text-align: left; }
            .hero-icon { height: 8rem; width: 8rem; }
            .hero-text h1 { font-size: 3.75rem; line-height: 1; }
            .hero-text p { font-size: 1.25rem; line-height: 1.75rem; }
            .intro-cards-grid { grid-template-columns: repeat(3, 1fr); }
            .practices-section { padding: 2.5rem; }
        }
      `}</style>
      <div className="d365-security-page">
        <header className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-bg"></div>
          <div className="container hero-content">
              <div className="hero-icon-container">
                  <ShieldCheckIcon className="hero-icon"/>
              </div>
              <div className="hero-text">
                  <h1>D365 Security Best Practices</h1>
                  <p>Comprehensive, multi-layered protection to safeguard your enterprise data and ensure operational integrity.</p>
              </div>
          </div>
        </header>
        
        <main className="container main-content">
          
          <section className="intro-cards-section">
               <div className="intro-cards-grid">
                  {introCards.map((card, index) => (
                      <div key={index} className="intro-card">
                          <img src={card.imageUrl} alt={card.title} className="intro-card-img"/>
                          <div className="intro-card-content">
                              <h3>{card.title}</h3>
                              <p>{card.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </section>

          <section className="practices-section">
              <h2>Our Core Security Principles</h2>
              <div className="practices-list">
                  {securityPractices.map((practice, index) => (
                      <div key={index} className="practice-item">
                          <div className="practice-icon-wrapper">
                             <practice.icon className="practice-icon" />
                          </div>
                          <div className="practice-details">
                              <h3>{practice.title}</h3>
                              <p>{practice.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </section>

        </main>
      </div>
    </>
  );
}

