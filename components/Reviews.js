import Reveal from "./Reveal";

export default function Reviews() {
  const reviews = [
    {
      text: "The entire experience was comfortable and professional. The team explained the treatment clearly and made me feel at ease.",
      name: "Priya S.",
      treatment: "Dental Care",
    },
    {
      text: "The clinic has a very welcoming environment. I appreciated how clearly everything was explained before my treatment.",
      name: "Rahul M.",
      treatment: "General Dentistry",
    },
    {
      text: "A smooth and comfortable experience from consultation to treatment. The staff were friendly and professional.",
      name: "Anjali R.",
      treatment: "Smile Care",
    },
  ];

  return (
    <section className="reviews-section" id="reviews">

      <div className="container">

        {/* Section Heading */}

        <Reveal>
          <div className="reviews-heading">

            <div>
              <span className="section-label">
                PATIENT EXPERIENCES
              </span>

              <h2>
                Care that patients
                <span>can feel good about.</span>
              </h2>
            </div>

            <div className="reviews-rating">

              <div className="stars">
                ★★★★★
              </div>

              <p>
                Sample testimonials for demonstration
              </p>

            </div>

          </div>
        </Reveal>


        {/* Reviews */}

        <div className="reviews-grid">

          {reviews.map((review, index) => (

            <Reveal
              key={index}
              delay={index * 0.12}
            >
              <div className="review-card">

                <div className="review-top">

                  <div className="quote-mark">
                    "
                  </div>

                  <div className="review-stars">
                    ★★★★★
                  </div>

                </div>


                <p className="review-text">
                  {review.text}
                </p>


                <div className="review-person">

                  <div className="review-avatar">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <strong>
                      {review.name}
                    </strong>

                    <small>
                      {review.treatment}
                    </small>
                  </div>

                </div>

              </div>
            </Reveal>

          ))}

        </div>


        {/* Trust CTA */}

        <Reveal delay={0.15}>
          <div className="reviews-cta">

            <div className="reviews-cta-icon">
              ✓
            </div>

            <div>
              <strong>
                Your comfort comes first.
              </strong>

              <p>
                Have questions about a treatment? Our team is here to help.
              </p>
            </div>

            <a
              href="#appointment"
              className="secondary-button"
            >
              Talk to Us →
            </a>

          </div>
        </Reveal>

      </div>

    </section>
  );
}