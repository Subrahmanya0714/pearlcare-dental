"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = heroRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className={`hero ${visible ? "hero-visible" : ""}`}
      id="home"
    >
      <div className="container hero-container">

        {/* Hero Content */}
        <div className="hero-content">

          <div className="hero-badge">
            <span>✦</span>
            Modern Dental Care
          </div>

          <h1>
            Your Smile
            <span>Deserves Expert Care.</span>
          </h1>

          <p>
            Personalized dental care combining modern technology,
            experienced professionals and a comfortable patient experience.
          </p>

          <div className="hero-buttons">
            <a
              href="#appointment"
              className="primary-button"
            >
              Book an Appointment
              <span>→</span>
            </a>

            <a
              href="#treatments"
              className="secondary-button"
            >
              Explore Treatments
            </a>
          </div>

          <div className="hero-trust">

            <div className="trust-item">
              <span className="trust-icon">✓</span>

              <div>
                <strong>Expert Care</strong>
                <small>Patient focused</small>
              </div>
            </div>

            <div className="trust-item">
              <span className="trust-icon">✓</span>

              <div>
                <strong>Modern Approach</strong>
                <small>Advanced treatment</small>
              </div>
            </div>

          </div>

        </div>

        {/* Hero Image */}
        <div className="hero-image">

          <div className="image-card">
            <Image
              src="/images/dental-hero.jpg"
              alt="Dentist providing professional dental care"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          <div className="experience-card">
            <span>✦</span>

            <div>
              <strong>Trusted Care</strong>
              <small>For every smile</small>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}