import React from "react";
import "../../styles/Stories.css";
import foleyLogo from "../../assets/stories/Foley logo_border.jpg"; 
import xaptLogo from "../../assets/stories/XN_XAPT_logo_pos_RGB_1600.jpg";       

const FoleyCAT = () => {
  return (
    <div className="project-container"data-aos="fade-up"data-aos-duration="1000">
      <h1 className="project-title"data-aos="fade-down"data-aos-duration="1300">Foley CAT Project Completion</h1>
      <h2 className="project-subtitle">
        A Milestone for DDPTech and XAPT Partnership
      </h2>

      <p className="project-text">
        We at DDPTech are excited to announce the successful completion and
        Go-Live of the Foley CAT project in the United States, after 15 months
        of diligent effort. This achievement reflects the exceptional
        collaboration between the DDPTech, Foley teams, and our partners at
        XAPT, resulting in one of our most comprehensive and flawless data
        migrations to date.
      </p>

      <p className="project-text">
        The project involved migrating from a legacy CAT DBS ERP system and
        multiple instances of the G3 Builder application to the cutting-edge
        NAXT365 solution using the NAXT 2012 to NAXT365 Upgrade solution. This
        accomplishment marks several firsts for DDPTech and further solidifies
        the strong partnership with XAPT:
      </p>

      <ul className="project-list">
        <li>First completed project in the US</li>
        <li>Comprehensive NAXT365 Project migration</li>
        <li>CAT G3 Builder to NAXT365 Standard Job migration</li>
      </ul>

      <p className="project-text">
        Numerous team members from both DDPTech, Foley, and XAPT contributed to
        this outstanding outcome, showcasing the power of collaboration and
        dedication among the partners.
      </p>

      <p className="project-text">
        At DDPTech, our mission is to help you reach your goals – Smarter,
        Faster, and Better. This successful project completion showcases our
        commitment to delivering exceptional results for our clients in the
        business-to-business arena, leveraging the expertise of our partners at
        XAPT and the capabilities of the NAXT 2012 to NAXT365.
      </p>

      <div className="logo-section">
        <img src={foleyLogo} alt="Foley CAT Logo" className="foley-logo" />
        <img src={xaptLogo} alt="XAPT Logo" className="xapt-logo" />
      </div>
    </div>
  );
};

export default FoleyCAT;
