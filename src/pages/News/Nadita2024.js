import React from "react";
import "../../styles/Nadita2024.css";
import naditaLogo from "../../assets/News/NADITA_2024_600.jpg"; // replace with your 2023 logo
import expoImage from "../../assets/News/NADITA_2024_Stand_600.jpg";  // replace with your 2023 expo image

const Nadita2024 = () => {
  return (
    <div className="nadita-container">
      <h1 className="nadita-title"data-aos="fade-down">
        LGS Partnering with DDPTech supporting the Caterpillar Community at NADITA 2024
      </h1>

      <div className="nadita-header">
        <p className="nadita-text">
          We are pleased to share our experiences from the NADITA 2024 conference, where LGS along
          with DDPTech had a significant presence with a dedicated stand at the expo. This year, three of
          our team members representing LGS &amp; DDPTech attended, further establishing our role in the
          data migration domain. Our ongoing collaboration with XAPT and members of the Caterpillar
          community highlights our commitment to guiding businesses through their data migration
          journey and ensuring a seamless transition to XAPT’s robust NAXT365 solution.
        </p>

        <div className="nadita-logo" data-aos="fade-left">
          <img src={naditaLogo} alt="NADITA 2024" />
  
        </div>
      </div>

      <div className="nadita-section">
        <p>
          The NADITA conference continues to be a hub of learning and innovation, featuring:
        </p>
        <ul>
          <li>
            <strong>Interactive Sessions:</strong> Stimulating thought and
            inviting participation.
          </li>
          <li>
            <strong>Hands-On Workshops:</strong> Addressing current industry
            challenges through practical approaches.
          </li>
          <li>
            <strong>Expert Panel Discussions:</strong> Debating and discussing
            the trends shaping our industry.
          </li>
        </ul>
      </div>

      <div className="nadita-section">
        <p>
          Our expo stand allowed us to engage directly with attendees, showcasing our advancements, and demonstrating the benefits of our data migration solutions. Interacting face-to-face with industry peers and potential clients provided valuable insights into the current needs and challenges of businesses.
        </p>
        {/* <div className="nadita-image">
          <img src={expoImage} alt="DDPTech Expo Booth at NADITA 2023" />
        </div> */}
      </div>

      <div className="nadita-section">
        <p>
          NADITA 2024 was more than a conference; it highlighted the importance of collaboration and direct engagement. We remain dedicated to fostering partnerships with industry leaders like XAPT, anticipating further collaborations, building lasting relationships, and steering the industry towards greater success and progress.
        </p>
      </div>
    </div>
  );
};

export default Nadita2024;
