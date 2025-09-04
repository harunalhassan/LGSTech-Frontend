import React, { useEffect, useState, useRef } from "react";
import "../styles/About.css";
import innovation from "../assets/AboutLogo/innovation.png"
import customer from "../assets/AboutLogo/customer.png"
import excellence from "../assets/AboutLogo/excellence.png"
import collaboration from "../assets/AboutLogo/collaboration.png"
import integrity from "../assets/AboutLogo/crm.png"
import learning from "../assets/AboutLogo/learning.png"

const About = () => {
  // Animated Counters
  const [teamCount, setTeamCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const metricsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const animateCounter = (target, setter, duration = 2000) => {
            let start = 0;
            const step = target / (duration / 16); // ~60fps
            const counter = setInterval(() => {
              start += step;
              if (start >= target) {
                start = target;
                clearInterval(counter);
              }
              setter(Math.floor(start));
            }, 16);
          };

          animateCounter(30, setTeamCount);
          animateCounter(100, setProjectsCount);
          animateCounter(5000, setUsersCount);
        }
      },
      { threshold: 0.4 } // trigger when 40% of section is visible
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section className="about-section">
      <div className="overlay"></div>

      <div className="about-container">
        {/* Heading */}
        <h3
          className="heading"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          ABOUT US
        </h3>
        <h1
          className="about-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Our Vision is to Transforming Businesses with{" "}
          <span className="highlight_text">Dynamics 365</span> and{" "}
          <span className="highlight_text">Beyond</span>
        </h1>

        {/* Intro */}
        <p className="about-intro" >
          At LGSTech we empower businesses with strategic insights, digital
          transformation and Microsoft Dynamics 365 solutions. Our mission is
          to simplify complexity, drive efficiency and help organizations
          achieve sustainable growth.
        </p>

        {/* Main About Section */}
        <section className="about-main">
          <div className="about-text">
            <p>
              LGS Tech has been a trusted partner in helping enterprises
              navigate the complexities of ERP product evaluation, Microsoft
              Dynamics 365 consulting and digital transformation.
            </p>

            <p>
              With years of expertise, we have delivered scalable, secure and
              innovative solutions to organizations across industries, enabling
              them to embrace cloud adoption, harness business intelligence and
              unlock new growth opportunities.
            </p>

            <p>
              Backed by a team of professionals with a proven track record, LGS Tech
              is committed to simplifying complexity and empowering businesses
              to achieve operational excellence through modern technology and
              strategic insights.
            </p>
          </div>

          <div className="about-ceo">
            <img src="/images/ceo.jpg" alt="CEO" />
            <h4>Name</h4>
            <p>Founder & CEO</p>
          </div>
        </section>

        {/* Metrics Section */}
        {/* Metrics Section */}
        <section className="metrics-section" ref={metricsRef}>
          <div className="metrics-card">
            <div className="metric">
              <h2>{teamCount}+</h2>
              <p>Team members</p>
            </div>
            <div className="metric">
              <h2>{projectsCount}+</h2>
              <p>Projects Delivered</p>
            </div>
            <div className="metric">
              <h2>{usersCount.toLocaleString()}+</h2>
              <p>Global Users</p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="core-values">
          <h2>Our Core Values</h2>
          <p className="values-intro">
            At LGS Tech, our values guide everything we do. They inspire us to
            innovate, deliver excellence and build trusted partnerships with
            our clients.
          </p>

          <div className="values-grid">
            <div className="value-card">
              <img src={innovation} alt="Innovation" className="value-icon" />
              <h3>Innovation</h3>
              <p>
                We embrace the latest in Dynamics 365 and emerging technologies
                to create smarter solutions.
              </p>
            </div>
            <div className="value-card">
              <img src={customer}alt="Customer First" className="value-icon" />
              <h3>Customer First</h3>
              <p>
                We put clients at the heart of our mission, ensuring every
                solution drives real business impact.
              </p>
            </div>
            <div className="value-card">
              <img src={excellence} alt="Excellence" className="value-icon" />
              <h3>Excellence</h3>
              <p>
                We aim for the highest standards, delivering reliable, scalable
                and future-ready solutions.
              </p>
            </div>
            <div className="value-card">
              <img src={integrity}alt="Integrity" className="value-icon" />
              <h3>Integrity</h3>
              <p>
                We act with transparency and build long-lasting trust with our
                clients and partners.
              </p>
            </div>
            <div className="value-card">
              <img src={collaboration} alt="Collaboration" className="value-icon" />
              <h3>Collaboration</h3>
              <p>
                We believe teamwork drives success — working with clients as
                partners, not just providers.
              </p>
            </div>
            <div className="value-card">
              <img src={learning} alt="Continuous Learning" className="value-icon" />
              <h3>Continuous Learning</h3>
              <p>
                We adapt, learn, and grow to keep our solutions and people ahead
                of the curve.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="what-we-do">
          <div className="what-we-do-card">
            <h2>What We Do</h2>
            <p>
              From <strong>ERP product/vendor evaluation</strong> to{" "}
              <strong> Dynamics 365 consulting, data migration, digital
              marketing</strong> and <strong>Azure cloud solutions</strong> —
              we help enterprises streamline operations and unlock growth.
            </p>
            <div className="btn-group">
              <button className="what-we-do-btn">Explore Our Services</button>
              <button className="what-we-do-btn secondary-btn">
                Connect With Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
