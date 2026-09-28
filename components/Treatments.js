export default function Treatments() {
  const treatments = [
    {
      icon: "✦",
      title: "General Dentistry",
      description:
        "Routine checkups, cleaning and preventive dental care for healthy smiles.",
    },
    {
      icon: "◇",
      title: "Dental Implants",
      description:
        "Modern tooth replacement solutions designed to restore function and confidence.",
    },
    {
      icon: "✧",
      title: "Root Canal Treatment",
      description:
        "Careful treatment focused on relieving discomfort and protecting your natural tooth.",
    },
    {
      icon: "☼",
      title: "Teeth Whitening",
      description:
        "Professional whitening options for a brighter and more confident smile.",
    },
    {
      icon: "⌁",
      title: "Braces & Aligners",
      description:
        "Treatment options designed to improve tooth alignment and create a balanced smile.",
    },
    {
      icon: "♡",
      title: "Cosmetic Dentistry",
      description:
        "Personalized cosmetic treatments designed to enhance your smile.",
    },
    {
      icon: "◯",
      title: "Pediatric Dentistry",
      description:
        "Gentle and friendly dental care designed with younger patients in mind.",
    },
    {
      icon: "✚",
      title: "Wisdom Tooth Removal",
      description:
        "Professional assessment and treatment for problematic wisdom teeth.",
    },
  ];

  return (
    <section className="treatments-section" id="treatments">

      <div className="container">

        {/* Section Heading */}

        <div className="treatments-heading">

          <div>
            <span className="section-label">
              OUR TREATMENTS
            </span>

            <h2>
              Complete care for
              <span>every smile.</span>
            </h2>
          </div>

          <p>
            From preventive care to advanced dental treatments,
            our services are designed around your individual needs.
          </p>

        </div>


        {/* Treatment Cards */}

        <div className="treatments-grid">

          {treatments.map((treatment, index) => (

            <div
              className="treatment-card"
              key={index}
            >

              <div className="treatment-icon">
                {treatment.icon}
              </div>

              <div className="treatment-number">
                0{index + 1}
              </div>

              <h3>
                {treatment.title}
              </h3>

              <p>
                {treatment.description}
              </p>

              <a
                href="#appointment"
                className="treatment-link"
              >
                Learn More →
              </a>

            </div>

          ))}

        </div>


        {/* Bottom CTA */}

        <div className="treatments-cta">

          <div>
            <span className="section-label">
              NEED HELP?
            </span>

            <h3>
              Not sure which treatment
              is right for you?
            </h3>
          </div>

          <a
            href="#appointment"
            className="primary-button"
          >
            Talk to Our Team
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}