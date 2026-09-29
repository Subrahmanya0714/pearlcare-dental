import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
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

        <Hero />


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