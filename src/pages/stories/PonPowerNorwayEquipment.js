import React from "react";
import "../../styles/Stories.css";
import poncatLogo from "../../assets/stories/Pon-Power-logo.jpg"; // replace with actual PonCAT unified logo path
import xaptLogo from "../../assets/stories/XN_XAPT_logo_pos_RGB_1600.jpg"; // replace with actual XAPT logo path

const PonPowerNorwayEquipment = () => {
  return (
    <div className="project-container"data-aos="fade-up"data-aos-duration="1000">
      <h1 className="project-title"data-aos="fade-down"data-aos-duration="1300">
        Pon Power Norway &amp; Equipment – Project Completion!
      </h1>

      <p className="project-text">
        Following the successful deployment of our data migration solution for
        Pon Equipment Netherlands in June 2022, we have recently completed
        another project for Pon Power Norway and Pon Equipment. Over the course
        of four months, our team adapted and customized our data migration
        solution to cater to the specific needs of the two Pon Norway legal
        entities. This was made possible through our close collaboration with
        Pon, XAPT, and our NAXT 2012 to NAXT365 Upgrade Solution.
      </p>

      <p className="project-text">
        Through meticulous refinement to address local business requirements and
        multiple successful trial runs, we deployed the NAXT365 Finance and
        Operations solution with full Customer Engagement synchronisation. Our
        unique 'PreCut' and 'CutOver' technologies played a crucial role in
        deploying data into a live operational NAXT365 environment, ensuring a
        seamless transition.
      </p>

      <p className="project-text">
        This achievement was made possible by the combined efforts of our global
        teams working around the clock across Norway, India, and Australia.
        Their collaboration demonstrates our commitment to providing top-quality
        data migration services to our clients worldwide. The strong partnership
        we have with XAPT also allows us to leverage their expertise in NAXT365
        and combine it with our data migration know-how to deliver outstanding
        results for our clients.
      </p>

      <p className="project-text">
        We are now looking forward to the final installment of this project
        series, focusing on Pon Power Netherlands. Scheduled for deployment in
        the second quarter of 2023, this project is the largest and most complex
        of all the Pon companies. Our team is already making progress on the ETL
        solution build, with initial trials underway.
      </p>

      <p className="project-text">
        This project is a testament to the capabilities of DDPTech and XAPT in
        delivering top-notch data migration and ERP solutions to businesses
        worldwide. We look forward to continuing this successful partnership,
        driving innovation and providing exceptional results for our clients in
        the heavy equipment industry.
      </p>

      <div className="logo-section">
        <img src={poncatLogo} alt="PonCAT Logo" className="logo-img" />
        <img src={xaptLogo} alt="XAPT Logo" className="logo-img" />
      </div>
    </div>
  );
};

export default PonPowerNorwayEquipment;
