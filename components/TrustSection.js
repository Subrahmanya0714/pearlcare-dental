import Reveal from "./Reveal";

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="container">

        {/* Trust Section Heading */}
        <Reveal>
          <div className="section-heading center-heading">
            <span className="section-label">WHY PEARLCARE</span>

            <h2>
              Dental care designed
              <span>around you.</span>
            </h2>

            <p>
              A comfortable, modern approach to dental care with
              your health and confidence at the center.
            </p>
          </div>
        </Reveal>


        {/* Trust Cards */}
        <div className="trust-cards">

          <Reveal delay={0.05}>
            <div className="trust-card">
              <div className="card-icon">✦</div>

              <h3>Experienced Care</h3>

              <p>
                Professional dental care focused on your individual needs.
              </p>
            </div>
          </Reveal>


          <Reveal delay={0.1}>
            <div className="trust-card">
              <div className="card-icon">◇</div>

              <h3>Modern Approach</h3>

              <p>
                Contemporary treatment methods designed for better experiences.
              </p>
            </div>
          </Reveal>


          <Reveal delay={0.15}>
            <div className="trust-card">
              <div className="card-icon">♡</div>

              <h3>Patient Comfort</h3>

              <p>
                A welcoming environment designed to make every visit comfortable.
              </p>
            </div>
          </Reveal>


          <Reveal delay={0.2}>
            <div className="trust-card">
              <div className="card-icon">✓</div>

              <h3>Personalized Care</h3>

              <p>
                Clear guidance and treatment plans tailored to every patient.
              </p>
            </div>
          </Reveal>

        </div>


        {/* About */}
        <div className="about-section" id="about">

          {/* About Image */}
          <Reveal>
            <div className="about-image">

              <img
                src="/images/dental-clinic.jpg"
                alt="Modern dental clinic interior"
              />

              <div className="about-badge">
                <strong>Care</strong>
                <span>with confidence</span>
              </div>

            </div>
          </Reveal>


          {/* About Content */}
          <Reveal delay={0.1}>
            <div className="about-content">

              <span className="section-label">ABOUT PEARLCARE</span>

              <h2>
                Dental care built
                <span>around you.</span>
              </h2>

              <p>
                At PearlCare Dental Studio, we believe dental care should
                be professional, comfortable and personalized.
              </p>

              <p>
                Our approach combines modern treatment methods with
                clear communication, helping patients feel confident
                throughout their dental journey.
              </p>


              <div className="about-features">

                <div>
                  <span>✓</span>
                  <p>Patient-first approach</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>Modern treatment methods</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>Comfortable environment</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>Clear treatment guidance</p>
                </div>

              </div>


              <a href="#doctor" className="text-button">
                Meet Our Doctor →
              </a>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}