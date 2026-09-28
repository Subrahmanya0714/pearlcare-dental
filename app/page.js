import Image from "next/image";

import Navbar from "../components/Navbar";
import TrustSection from "../components/TrustSection";
import Treatments from "../components/Treatments";
import Doctor from "../components/Doctor";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Appointment from "../components/Appointment";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />

      <main>

        {/* =========================
            HERO SECTION
        ========================= */}

        <section className="hero" id="home">

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

              {/* Hero Buttons */}

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

              {/* Hero Trust Points */}

              <div className="hero-trust">

                <div className="trust-item">

                  <span className="trust-icon">
                    ✓
                  </span>

                  <div>
                    <strong>Expert Care</strong>
                    <small>Patient focused</small>
                  </div>

                </div>

                <div className="trust-item">

                  <span className="trust-icon">
                    ✓
                  </span>

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

              {/* Floating Card */}

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


        {/* =========================
            TRUST + ABOUT SECTION
        ========================= */}

        <TrustSection />


        {/* =========================
            TREATMENTS SECTION
        ========================= */}

        <Treatments />


        {/* =========================
            DOCTOR SECTION
        ========================= */}

        <Doctor />


        {/* =========================
            GALLERY SECTION
        ========================= */}

        <Gallery />


        {/* =========================
            REVIEWS SECTION
        ========================= */}

        <Reviews />


        {/* =========================
            APPOINTMENT SECTION
        ========================= */}

        <Appointment />


        {/* =========================
            CONTACT SECTION
        ========================= */}

        <Contact />

      </main>

      <Footer />
    </>
  );
}