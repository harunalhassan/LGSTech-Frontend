import React from 'react';

// SVG components for icons
const StakeholderIcon = () => (
    <svg className="icon-stakeholder" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
    </svg>
);

const MappingIcon = () => (
    <svg className="icon-mapping" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        <path d="M3 12h2" /><path d="M12 3v2" /><path d="m4.929 4.929 1.414 1.414" /><path d="M12 12L8 8" /><path d="M12 21v-4" /><path d="M16 21v-1" /><path d="M19 21v-3" /><path d="M22 21v-2" />
    </svg>
);

const TransformIcon = () => (
    <svg className="icon-transform" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21 7-3.5-3.5-3.5 3.5-3.5-3.5L7 7l3.5 3.5-3.5 3.5 3.5 3.5 3.5-3.5 3.5 3.5 3.5-3.5-3.5-3.5 3.5-3.5z" />
        <path d="m3.5 3.5 7 7" /><path d="m21 21-7-7" />
    </svg>
);

const IntegrityIcon = () => (
    <svg className="icon-integrity" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const AutomationIcon = () => (
    <svg className="icon-automation" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" /><path d="M16.92 11.92a7.14 7.14 0 0 1-1.85 3.83l-1.07-1.07" /><path d="M20.88 15.88a7.14 7.14 0 0 1-3.83 1.85l-1.07-1.07" /><path d="M12.08 17.08a7.14 7.14 0 0 1-3.83-1.85l1.07-1.07" /><path d="M7.12 12.08a7.14 7.14 0 0 1 1.85-3.83l1.07 1.07" />
        <circle cx="12" cy="12" r="2" /><path d="M22 12h-2" /><path d="M12 22v-2" /><path d="M4 12H2" /><path d="M12 4V2" />
    </svg>
);


const bestPractices = [
    { icon: <StakeholderIcon />, title: "Involve Stakeholders Early", description: "Engage business users and IT teams in the initial planning phase to clearly define requirements, set expectations, and ensure alignment across the board." },
    { icon: <MappingIcon />, title: "Accurate Data Mapping", description: "Meticulously map data fields from the source system to the destination system. This foundational step prevents data loss and ensures consistency." },
    { icon: <TransformIcon />, title: "Efficient Transformation Logic", description: "Develop and implement efficient data transformation logic, especially when schemas differ, to ensure data is correctly restructured." },
    { icon: <IntegrityIcon />, title: "Continuous Data Integrity Checks", description: "Introduce data integrity checks at various stages of the migration to identify and rectify data loss or corruption early." },
    { icon: <AutomationIcon />, title: "Utilize Automation Tools", description: "Employ automation for repetitive tasks like extraction and validation to reduce errors, save time, and increase efficiency." }
];

export default function App() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
                
                body {
                    font-family: "Montserrat", sans-serif;
                    background-color: #f0f4f8;
                    color: #1e293b;
                    margin: 0;
                    margin-top:170px;
                }

                .page-container {
                    min-height: 100vh;
                }

                .hero-section {
                    position: relative;
                    text-align: center;
                    padding: 80px 20px;
                    color: white;
                    background-color: #1e3a8a; /* Fallback color */
                    background-image: url('https://images.unsplash.com/photo-1644088379091-d574269d422f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
                    background-size: cover;
                    background-position: center;
                }
                
                .hero-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(15, 23, 42, 0.7); /* Dark blue overlay */
                }

                .hero-content {
                    position: relative;
                    z-index: 1;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .hero-title {
                    font-size: clamp(2.5rem, 6vw, 3.75rem);
                    font-weight: 800;
                    letter-spacing: -1.5px;
                    margin: 0 0 1rem;
                }
                
                .hero-subtitle {
                    font-size: clamp(1rem, 2.5vw, 1.25rem);
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                    color: #cbd5e1;
                }

                .main-content {
                    padding: 64px 20px;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 48px;
                }

                .section-title {
                    font-size: clamp(2rem, 5vw, 2.25rem);
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0 0 8px;
                }
                
                .section-subtitle {
                    font-size: 1.1rem;
                    color: #475569;
                }

                .practices-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 32px;
                }

                .practice-card {
                    background-color: #ffffff;
                    border-radius: 16px;
                    padding: 32px;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 1px solid #e2e8f0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .practice-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                }

                .card-icon {
                    margin-bottom: 16px;
                }
                
                .card-icon .icon-stakeholder { stroke: #3b82f6; }
                .card-icon .icon-mapping { stroke: #10b981; }
                .card-icon .icon-transform { stroke: #8b5cf6; }
                .card-icon .icon-integrity { stroke: #f59e0b; }
                .card-icon .icon-automation { stroke: #ef4444; }

                .card-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin: 0 0 8px;
                    color: #1e293b;
                }

                .card-description {
                    color: #64748b;
                    line-height: 1.6;
                    flex-grow: 1;
                }

                .page-footer {
                    background-color: #0f172a;
                    color: #94a3b8;
                    padding: 32px 20px;
                    text-align: center;
                    font-size: 0.9rem;
                }
            `}</style>
            <div className="page-container">
                <header className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title"data-aos="fade-down">Data Migration Best Practices</h1>
                        <h2 className="hero-subtitle"data-aos="fade-up">We ensure a seamless, secure and successful data migration process for your Business.</h2>
                    </div>
                </header>

                <main className="main-content">
                    <div className="section-header" data-aos="fade-up">
                        <h2 className="section-title">Core Principles For Our Success</h2>
                        <p className="section-subtitle">We follow these key practices to mitigate risks and achieve your migration goals.</p>
                    </div>
                    
                    <div className="practices-grid">
                        {bestPractices.map((practice, index) => (
                            <div key={index} className="practice-card">
                                <div className="card-icon">{practice.icon}</div>
                                <h3 className="card-title">{practice.title}</h3>
                                <p className="card-description">{practice.description}</p>
                            </div>
                        ))}
                    </div>
                </main>

               
            </div>
        </>
    );
}

