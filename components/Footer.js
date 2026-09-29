import Reveal from "./Reveal";

export default function Footer() {
  const whatsappNumber = "916363339707";

  const whatsappMessage = encodeURIComponent(
    "Hello PearlCare Dental Studio, I would like to know more about your dental services."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-main">

          {/* Brand */}

          <Reveal className="footer-brand">

            <a href="#home" className="footer-logo">

              <span className="footer-logo-icon">
                ✦
              </span>

              <div>
                <strong>PearlCare</strong>
                <small>Dental Studio</small>
              </div>

            </a>

            <p>
              Professional, personalized dental care designed
              to help every patient feel comfortable and confident
              about their smile.
            </p>

            <div className="footer-social">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                ↗
              </a>

              <a
                href="tel:+916363339707"
                aria-label="Call PearlCare"
              >
                ☎
              </a>

              <a
                href="mailto:hello@pearlcaredental.com"
                aria-label="Email PearlCare"
              >
                ✉
              </a>

            </div>

          </Reveal>


          {/* Quick Links */}

          <Reveal
            delay={0.08}
            className="footer-column"
          >

            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#treatments">Treatments</a>
            <a href="#doctor">Our Doctor</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>

          </Reveal>


          {/* Treatments */}

          <Reveal
            delay={0.16}
            className="footer-column"
          >

            <h3>Treatments</h3>

            <a href="#treatments">General Dentistry</a>
            <a href="#treatments">Dental Implants</a>
            <a href="#treatments">Root Canal Treatment</a>
            <a href="#treatments">Teeth Whitening</a>
            <a href="#treatments">Braces & Aligners</a>
            <a href="#treatments">Cosmetic Dentistry</a>

          </Reveal>


          {/* Contact */}

          <Reveal
            delay={0.24}
            className="footer-column footer-contact"
          >

            <h3>Contact</h3>

            <a href="tel:+916363339707">
              +91 63633 39707
            </a>

            <a href="mailto:hello@pearlcaredental.com">
              hello@pearlcaredental.com
            </a>

            <p>
              Main Road,
              <br />
              Kundapura, Karnataka
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              Chat on WhatsApp
              <span>↗</span>
            </a>

          </Reveal>

        </div>


        {/* Footer Bottom */}

        <Reveal delay={0.15}>
          <div className="footer-bottom">

            <p>
              © 2026 PearlCare Dental Studio. All rights reserved.
            </p>

            <div className="footer-bottom-links">

              <a href="/privacy">
                Privacy Policy
              </a>

              <a href="/terms">
                Terms & Conditions
              </a>

            </div>

            <a
              href="#home"
              className="back-to-top"
              aria-label="Back to top"
            >
              ↑
            </a>

          </div>
        </Reveal>

      </div>

    </footer>
  );
}