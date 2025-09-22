import React from "react";
import "../../styles/Stories.css";
import poncatLogo from "../../assets/stories/Pon-Power-logo.jpg"; // replace with actual PonCAT logo
import xaptLogo from "../../assets/stories/XN_XAPT_logo_pos_RGB_1600.jpg"; // replace with actual XAPT logo
import excavatorImg from "../../assets/stories/9dc16a_63c96741d08d40468c551d4a85d1355b~mv2.jpg"; // replace with actual excavator image path

const PonPowerNetherlands = () => {
  return (
    <div className="project-container"data-aos="fade-up"data-aos-duration="1000">
      <h1 className="project-title"data-aos="fade-down"data-aos-duration="1300">
        Pon Power Netherlands – Project Completion!
      </h1>

      <div className="project-content">
        {/* Left text + right image */}
        <div className="project-text-section">
          <p className="project-text">
            We're pleased to announce the successful completion of the final
            data migration phase for our valued client, Pon. This significant
            milestone, realised in close collaboration with our partner XAPT,
            draws a journey to its conclusion that began with the initial DM
            planning and scoping exercise on July 9th, 2019. The project,
            encompassing four legal entities, involved a team of skilled
            developers, numerous dedicated hours, and consistent commitment,
            resulting in the successful integration into the state-of-the-art
            NAXT 365 system.
          </p>

          <p className="project-text">
            Our association with XAPT has been instrumental in the success of
            this project. We sincerely appreciate their steadfast support and
            cooperation throughout. Together, we have made noteworthy progress
            and set a solid foundation for future partnerships.
          </p>
        </div>

        <div className="project-image-section"data-aos="fade-left"data-aos-duration="1000">
          <img
            src={excavatorImg}
            alt="Excavator"
            className="project-side-image"
          />
        </div>
      </div>

      {/* Full-width text continues below */}
      <div className="project-text-below">
        <p className="project-text">
          Our sincere thanks go to all the team members involved, including the
          ETL team, the dedicated D365 experts and data load team members, and
          the entire Pon team. Their tireless efforts and determination have
          ensured a smooth and efficient process.
        </p>

        <p className="project-text">
          We are grateful to the project sponsor and also the data specialists
          from Pon, for their unwavering trust in LGS, our methodologies,
          personnel, tools, and relentless support and collaboration with the
          Pon business, even during challenging times. This significantly
          contributed to these impressive results, from the project's inception
          to the final go-live transition!
        </p>

        <p className="project-text">
          Thank you for the efforts of everyone involved in this successful
          endeavor, this is a significant moment in the history of Pon, LGS, DDPTech,
          and XAPT.
        </p>
      </div>

      {/* Logos side by side */}
      <div className="logo-section-horizontal">
        <img src={poncatLogo} alt="PonCAT Logo" className="logo-img" />
        <img src={xaptLogo} alt="XAPT Logo" className="logo-img" />
      </div>
    </div>
  );
};

export default PonPowerNetherlands;
