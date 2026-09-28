import Image from "next/image";

export default function Gallery() {
  const galleryItems = [
    {
      image: "/images/dental-smile-1.jpg",
      title: "Modern Clinic",
      category: "Our Environment",
    },
    {
      image: "/images/dental-smile-2.jpg",
      title: "Professional Care",
      category: "Dental Treatment",
    },
    {
      image: "/images/dental-smile-3.jpg",
      title: "Expert Dentistry",
      category: "Patient Care",
    },
  ];

  return (
    <section className="gallery-section" id="gallery">

      <div className="container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="gallery-heading">

          <div>

            <span className="section-label">
              OUR CLINIC
            </span>

            <h2>
              A space designed
              <span>for your comfort.</span>
            </h2>

          </div>


          <p>
            Take a look at the environment and care experience
            we aim to create for every patient.
          </p>

        </div>


        {/* =========================
            GALLERY
        ========================= */}

        <div className="gallery-grid">

          {galleryItems.map((item, index) => (

            <div
              className={`gallery-card gallery-card-${index + 1}`}
              key={index}
            >

              {/* Image */}

              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />


              {/* Image Overlay */}

              <div className="gallery-overlay">

                <div>

                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                </div>


                <span className="gallery-arrow">
                  ↗
                </span>

              </div>

            </div>

          ))}

        </div>


        {/* =========================
            BOTTOM CTA
        ========================= */}

        <div className="gallery-bottom">

          <div>

            <span className="section-label">
              YOUR SMILE JOURNEY
            </span>

            <h3>
              Ready to take the next step?
            </h3>

          </div>


          <a
            href="#appointment"
            className="primary-button"
          >
            Book an Appointment
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}