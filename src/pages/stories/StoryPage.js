import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Stories.css";

import foleyImg from "../../assets/stories/Foley logo_border.jpg";
import poncatImg from "../../assets/stories/Pon-Power-logo.jpg";
import xaptImg from "../../assets/stories/XN_XAPT_logo_pos_RGB_1600.jpg";
import bgImg from "../../assets/stories/pexels-olia-danilevich-8145336.jpg";

import coverFoley from "../../assets/stories/pexels-fauxels-3183197.jpg";
import coverNorway from "../../assets/stories/pexels-kampus-8204387.jpg";
import coverNL from "../../assets/stories/pexels-khwanchai-12885861.jpg";
import coverGecolsa from "../../assets/carousel1.jpg";

const stories = [
  {
    id: "foley",
    title: "Foley CAT — Flawless Data Migration",
    teaser:
      "15 months, zero data loss, and a seamless NAXT365 upgrade. See how collaboration powered a perfect go-live.",
    to: "/stories/folycat",
    cover: coverFoley || foleyImg,
    tags: ["NAXT365", "Migration", "USA"],
  },
  {
    id: "norway",
    title: "Pon Power Norway & Equipment",
    teaser:
      "From trials to full deployment — a four-month transformation tailored for two Norwegian legal entities.",
    to: "/stories/pon-Norway-CAT",
    cover: coverNorway || bgImg,
    tags: ["Finance & Ops", "CutOver", "PreCut"],
  },
  {
    id: "netherlands",
    title: "Pon Power Netherlands — Project Completion",
    teaser:
      "A multi-year journey across four legal entities culminates in a modern NAXT 365 system.",
    to: "/stories/pon-Netherlands-CAT",
    cover: coverNL || bgImg,
    tags: ["ETL", "Go-Live", "Partnership"],
  },
  {
    id: "gecolsa",
    title: "Gecolsa — Smarter, Faster, Better",
    teaser:
      "Unlocking operational excellence with a clean migration path and measurable impact.",
    to: "/stories/gecolsa",
    cover: coverGecolsa || xaptImg,
    tags: ["Optimization", "LATAM", "NAXT365"],
  },
];

const StoryPage = () => {
  const navigate = useNavigate();

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("reveal-on")
        ),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Dark mode switcher
  useEffect(() => {
    const featured = document.querySelector(".featured-story");
    const page = document.querySelector(".stories-page");

    const ioDark = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            page.classList.add("dark-mode");
          } else {
            page.classList.remove("dark-mode");
          }
        });
      },
      { threshold: 0.4 }
    );

    if (featured) ioDark.observe(featured);
    return () => ioDark.disconnect();
  }, []);

  // helper function for navigation + scroll
  const goToPage = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="stories-page">
      {/* HERO */}
      <section
        className="stories-hero"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <h1 className="stories-hero-title">Our Stories of Success</h1>
          <p className="stories-hero-sub">
            Real projects. Real impact. Dive into transformation journeys powered
            by <span className="brand-accent">DDPTech</span>, our partners, and
            our clients.
          </p>
          <div className="hero-cta">
            <a href="#stories-grid" className="btn-primary">
              Explore Stories
            </a>
            <button
              onClick={() => goToPage("/contact")}
              className="btn-ghost"
            >
              Start Your Project
            </button>
          </div>
          <div className="hero-logos">
            <img src={poncatImg} alt="PonCAT" />
            <img src={xaptImg} alt="XAPT" />
            <img src={foleyImg} alt="Foley" />
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured-story reveal">
        <div className="featured-media">
          <img src={coverFoley || bgImg} alt="Featured Story" />
        </div>
        <div className="featured-copy">
          <h2>Featured: Foley CAT — A Seamless Go-Live</h2>
          <p>
            A 15-month program across teams and partners delivered one of our
            most comprehensive, flawless migrations. Discover the approach, key
            decisions, and lessons learned that make this a blueprint for
            success.
          </p>
          <button
            onClick={() => goToPage("/stories/folycat")}
            className="btn-primary"
          >
            Read the Story
          </button>
        </div>
      </section>

      {/* GRID */}
      <section id="stories-grid" className="stories-grid">
        {stories.map((s, idx) => (
          <div
            key={s.id}
            className={`story-card reveal d${(idx % 6) + 1}`}
            onClick={() => goToPage(s.to)}
            style={{ cursor: "pointer" }}
          >
            <div className="story-media">
              <img src={s.cover} alt={s.title} />
              <div className="story-overlay">
                <span className="story-read">Read story →</span>
              </div>
            </div>
            <div className="story-body">
              <h3>{s.title}</h3>
              <p>{s.teaser}</p>
              <div className="story-tags">
                {s.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* QUOTES */}
      <section className="stories-quotes reveal">
        <div className="quotes-track">
          <blockquote>
            “CutOver went flawlessly — best migration we’ve experienced.”
            <span>— Program Sponsor, Pon</span>
          </blockquote>
          <blockquote>
            “The NAXT365 upgrade delivered measurable value in weeks.”
            <span>— Ops Lead, Foley CAT</span>
          </blockquote>
          <blockquote>
            “True partnership. Fast decisions, clean execution.”
            <span>— Delivery Director, XAPT</span>
          </blockquote>
          <blockquote>
            “From chaos to clarity — our data is finally trusted.”
            <span>— CFO, Gecolsa</span>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="stories-cta reveal">
        <h2>Ready to write your success story?</h2>
        <p>
          We design migrations that are smooth, safe, and scalable — driven by
          proven tools and trusted experts.
        </p>
        <button
          onClick={() => goToPage("/contact")}
          className="btn-primary"
        >
          Talk to Us
        </button>
      </section>
    </div>
  );
};

export default StoryPage;
