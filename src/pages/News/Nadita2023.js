import React from "react";
import "../../styles/Nadita2024.css";
import naditaLogo from "../../assets/News/NADITA_2023_600.avif";
import expoImage from "../../assets/News/9dc16a_a66b73c8ea9c4c40a2929ec3c1491bc3~mv2.avif";

const Nadita2023 = () => {
  return (
    <div className="nadita-container">
      <h1 className="nadita-title" data-aos="fade-down">
        Collaborating with XAPT to Propel Technological Progress at NADITA 2023
      </h1>

      <div className="nadita-header">
        <p className="nadita-text">
          We're excited to share our experiences from the NADITA 2023 conference,
          where we had the honor of working closely with our esteemed partner, XAPT.
          As a pivotal player in the data migration domain, we remain committed to
          guiding businesses through their data migration journey and ensuring a smooth
          shift to XAPT's robust and comprehensive NAXT solution.
        </p>

        <div className="nadita-logo" data-aos="fade-left">
          <img src={naditaLogo} alt="NADITA 2023" />
        </div>
      </div>

      <div className="nadita-section">
        <p>
          The NADITA conference is not just a meeting point, but a hub of learning and innovation, featuring:
        </p>
        <ul>
          <li>
            <strong>Interactive Sessions:</strong> Stimulated thought and invited participation.
          </li>
          <li>
            <strong>Hands-On Workshops:</strong> Allowed a practical approach to industry challenges.
          </li>
          <li>
            <strong>Expert Panel Discussions:</strong> Brought together experts to debate industry trends.
          </li>
        </ul>
      </div>

      <div className="nadita-section">
        <p>
          These elements combined to offer valuable insights into the latest industry
          trends and technological advancements. Our involvement in these platforms
          allowed us to engage in meaningful dialogue, share best practices, and
          explore new strategies for the future.
        </p>
        <div className="nadita-image">
          <img src={expoImage} alt="DDPTech Expo Booth at NADITA 2023" />
        </div>
      </div>

      <div className="nadita-section">
        <p>
          Throughout the event, the support and cooperation from the XAPT team,
          along with the contribution of various businesses, were pivotal. We extend
          our appreciation to all those who shared their unique experiences,
          perspectives, and expertise. These collaborative efforts are the driving
          forces behind the ongoing evolution and innovation in our industry.
        </p>
        <p>
          In the end, NADITA 2023 was more than a conference; it was a testament
          to the power of collaboration. We remain dedicated to fostering partnerships
          with industry leaders like XAPT, anticipating further collaborations,
          building lasting relationships, and steering the industry towards new heights
          of success and progress.
        </p>
      </div>
    </div>
  );
};

export default Nadita2023;
