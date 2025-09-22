import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/News.css";

const newsData = [
  {
    id: 1,
    title: "LGS & DDPTech Support Caterpillar Community at NADITA 2024",
    description:
      "A look into our successful collaboration and technology showcase at the North American Dealer IT Association conference.",
    category: "Conference",
    date: "May 15, 2024",
    link: "/news/nadita2024",
    imageUrl: "https://placehold.co/600x300/0c7b94/FFFFFF?text=NADITA+2024",
  },
  {
    id: 2,
    title: "Collaborating with XAPT to Propel Tech Progress at NADITA 2023",
    description:
      "Reflecting on our partnership with XAPT and the innovative solutions presented at last year's NADITA event.",
    category: "Partnership",
    date: "June 22, 2023",
    link: "/news/nadita2023",
    imageUrl: "https://placehold.co/600x300/017159/FFFFFF?text=NADITA+2023",
  },
];

const NewsCard = ({ article }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`news-card ${isVisible ? "animate" : ""}`}
    >
      <Link to={article.link} className="news-link">
        {/* === Added Image === */}
        {article.imageUrl && (
          <div className="news-image">
            <img src={article.imageUrl} alt={article.title} />
          </div>
        )}

        <div className="news-card-header">
          <span className="news-category">{article.category}</span>
          <span className="news-date">{article.date}</span>
        </div>
        <h3 className="news-card-title">{article.title}</h3>
        <p className="news-card-desc">{article.description}</p>
        <div className="read-more">Read More →</div>
      </Link>
    </div>
  );
};

const News = () => {
  return (
    <div className="news-container">
      <h1 className="news-title">What's in the News?</h1>
      <p className="news-intro">
        Explore our latest updates, conferences, and collaborations.
      </p>
      <div className="news-grid">
        {newsData.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default News;
