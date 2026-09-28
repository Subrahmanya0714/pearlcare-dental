export default function Doctor() {
  return (
    <section className="doctor-section" id="doctor">

      <div className="container doctor-container">

        {/* Doctor Image */}

        <div className="doctor-image">

          <img
            src="/images/dentist-doctor.jpg"
            alt="Dr. Ananya Sharma"
          />

          <div className="doctor-experience-card">
            <strong>Patient-Focused</strong>
            <span>Dental Care</span>
          </div>

        </div>


        {/* Doctor Information */}

        <div className="doctor-content">

          <span className="section-label">
            MEET YOUR DENTIST
          </span>

          <h2>
            Care from a dentist
            <span>you can trust.</span>
          </h2>

          <h3>
            Dr. Ananya Sharma
          </h3>

          <p className="doctor-qualification">
            BDS, MDS — Prosthodontics
          </p>

          <p>
            Dr. Ananya Sharma is dedicated to providing personalized
            dental care in a comfortable and welcoming environment.
          </p>

          <p>
            Her approach focuses on understanding each patient's
            needs and explaining treatment options clearly before
            beginning any procedure.
          </p>


          {/* Doctor Highlights */}

          <div className="doctor-highlights">

            <div className="doctor-highlight">

              <span>✓</span>

              <div>
                <strong>Patient First</strong>
                <small>Personalized treatment approach</small>
              </div>

            </div>


            <div className="doctor-highlight">

              <span>✓</span>

              <div>
                <strong>Modern Care</strong>
                <small>Contemporary dental techniques</small>
              </div>

            </div>


            <div className="doctor-highlight">

              <span>✓</span>

              <div>
                <strong>Clear Guidance</strong>
                <small>Easy-to-understand treatment plans</small>
              </div>

            </div>


            <div className="doctor-highlight">

              <span>✓</span>

              <div>
                <strong>Comfort Focused</strong>
                <small>A calm and welcoming experience</small>
              </div>

            </div>

          </div>


          <a
            href="#appointment"
            className="primary-button doctor-button"
          >
            Book an Appointment
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}
