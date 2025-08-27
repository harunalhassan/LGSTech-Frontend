import React from "react";
import "../../styles/Stories.css";
import gecolsaLogo from "../../assets/stories/BSTRONG.jpg";
import xaptLogo from "../../assets/stories/XN_XAPT_logo_pos_RGB_1600.jpg";

const GecolsaProject = () => {
  return (
    <div className="project-container"data-aos="fade-up"data-aos-duration="1000">
      <h1 className="project-title"data-aos="fade-down"data-aos-duration="1300">Gecolsa – Project Completion!</h1>

      <p className="project-text">
        We are thrilled to announce the successful completion of our first South American CAT dealership data migration project. Despite the challenging timeframes, our team at DDPTech, in collaboration with XAPT, worked diligently to achieve a seamless migration using our DM REVOLVE toolsets and Microsoft Dynamics load automation technologies. Within just four months, we managed to migrate a comprehensive NAXT365 ERP consisting of 98 data objects across four legal entities.
      </p>

      <p className="project-text">
        The final objects went live in February 2022, showcasing the remarkable results that teamwork and collaboration can accomplish. We are grateful to XAPT for entrusting us with this project and extend our heartfelt appreciation to our dedicated team members from DDPTech, XAPT, and Gecolsa for their expertise, commitment, and unwavering determination.
      </p>

    <div
        className="video-wrapper"
        style={{
          backgroundImage:
            "url('https://i.ytimg.com/vi_webp/h069SjrgzyI/sddefault.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <iframe
          className="project-video"
          src="https://www.youtube.com/embed/h069SjrgzyI"
          title="Gecolsa Project Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="project-text">
        This project’s success was made possible by the powerful combination of DDPTech’s DM REVOLVE toolsets and cutting-edge D365 load automation tools. Congratulations to everyone involved in this outstanding achievement that demonstrates the power of collaboration and innovative solutions!
      </p>

      <div className="logo-section">
        <img src={gecolsaLogo} alt="Gecolsa CAT Logo" className="gecolsa-logo" />
        <img src={xaptLogo} alt="XAPT Logo" className="xapt-logo" />
      </div>
    </div>
  );
};

export default GecolsaProject;
