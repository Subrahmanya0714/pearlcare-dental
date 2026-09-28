export default function Contact() {
  const whatsappNumber = "916363339707";

  const whatsappMessage = encodeURIComponent(
    "Hello PearlCare Dental Studio, I would like to know more about your dental services."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=PearlCare+Dental+Studio";

  return (
    <section className="contact-section" id="contact">

      <div className="container">

        {/* Contact Heading */}

        <div className="contact-heading">

          <div>
            <span className="section-label">
              VISIT OUR CLINIC
            </span>

            <h2>
              We're here for
              <span>your smile.</span>
            </h2>
          </div>

          <p>
            Have a question, need a consultation or want to
            schedule a visit? Reach out to our team and we'll
            be happy to help.
          </p>

        </div>


        {/* Contact Content */}

        <div className="contact-grid">

          {/* Contact Information */}

          <div className="contact-info">

            {/* Phone */}

            <a
              href="tel:+916363339707"
              className="contact-card"
            >
              <div className="contact-icon">
                ☎
              </div>

              <div>
                <small>CALL US</small>
                <strong>+91 63633 39707</strong>
                <span>Speak directly with our team</span>
              </div>

            </a>


            {/* WhatsApp */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                ↗
              </div>

              <div>
                <small>WHATSAPP</small>
                <strong>Chat with our team</strong>
                <span>Quick responses through WhatsApp</span>
              </div>

            </a>


            {/* Email */}

            <a
              href="mailto:hello@pearlcaredental.com"
              className="contact-card"
            >
              <div className="contact-icon">
                ✉
              </div>

              <div>
                <small>EMAIL</small>
                <strong>hello@pearlcaredental.com</strong>
                <span>Send us your questions anytime</span>
              </div>

            </a>


            {/* Address */}

            <div className="contact-card contact-card-static">

              <div className="contact-icon">
                ⌖
              </div>

              <div>
                <small>VISIT US</small>
                <strong>PearlCare Dental Studio</strong>
                <span>
                  Main Road, Kundapura, Karnataka
                </span>
              </div>

            </div>

          </div>


          {/* Map / Clinic Details */}

          <div className="contact-map-card">

            <div className="map-placeholder">

              <div className="map-content">

                <div className="map-pin">
                  ⌖
                </div>

                <h3>
                  PearlCare Dental Studio
                </h3>

                <p>
                  Main Road, Kundapura, Karnataka
                </p>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-button"
                >
                  Get Directions
                  <span>→</span>
                </a>

              </div>

            </div>


            {/* Opening Hours */}

            <div className="opening-hours">

              <div>
                <span>OPENING HOURS</span>
                <strong>Mon – Sat</strong>
              </div>

              <div className="hours-time">
                <strong>9:00 AM – 7:00 PM</strong>
                <small>Sunday: Closed</small>
              </div>

            </div>

          </div>

        </div>


        {/* Bottom CTA */}

        <div className="contact-cta">

          <div>

            <span className="section-label">
              NEED AN APPOINTMENT?
            </span>

            <h3>
              Let's take the next step toward
              a healthier smile.
            </h3>

          </div>

          <div className="contact-cta-buttons">

            <a
              href="tel:+916363339707"
              className="secondary-button"
            >
              Call Now
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              WhatsApp Us
              <span>↗</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}