import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/News.css";

import nadita2024Img from "../../assets/News/NADITA_2024_Stand_600.jpg";
import nadita2023Img from "../../assets/News/9dc16a_a66b73c8ea9c4c40a2929ec3c1491bc3~mv2.jpg";

const News = () => {
  useEffect(() => {
    // IntersectionObserver for reveal animation
    const cards = document.querySelectorAll(".news-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="news-container">
      <h1 className="news-title" data-aos="fade-down">
        What's in the News?
      </h1>
      <p className="news-intro" data-aos="fade-up">
        Explore our latest updates, conferences, and collaborations.
      </p>

      <div className="news-grid">
        {/* === NADITA 2024 Card === */}
        <div className="news-card" data-aos="fade-up" data-aos-delay="100">
          <div className="slide-bg"></div>
          <Link to="/news/nadita2024">
            <div className="news-image">
              <img src={nadita2024Img} alt="NADITA 2024" />
            </div>
            <h2 className="news-card-title">
              DDPTech supporting the Caterpillar Community at NADITA 2024
            </h2>
          </Link>
        </div>

        {/* === NADITA 2023 Card === */}
        <div className="news-card" data-aos="fade-up" data-aos-delay="200">
          <div className="slide-bg"></div>
          <Link to="/news/nadita2023">
            <div className="news-image">
              <img src={nadita2023Img} alt="NADITA 2023" />
            </div>
            <h2 className="news-card-title">
              Collaborating with XAPT to Propel Technological Progress at NADITA 2023
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
