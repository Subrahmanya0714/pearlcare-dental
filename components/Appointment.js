"use client";

import { useState } from "react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    message: "",
  });

  // =========================================
  // HANDLE INPUT CHANGES
  // =========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };


  // =========================================
  // SEND APPOINTMENT TO WHATSAPP
  // =========================================

  const handleSubmit = () => {

    // Check required fields

    if (formData.name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (formData.phone.trim() === "") {
      alert("Please enter your phone number.");
      return;
    }

    if (formData.treatment === "") {
      alert("Please select a treatment.");
      return;
    }


    // Create WhatsApp message

    const message =
      `Hello PearlCare Dental Studio,\n\n` +
      `I would like to request an appointment.\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email || "Not provided"}\n` +
      `Treatment: ${formData.treatment}\n\n` +
      `Message:\n${formData.message || "No additional message."}`;


    // Encode message

    const encodedMessage = encodeURIComponent(message);


    // WhatsApp number

    const whatsappNumber = "916363339707";


    // Create WhatsApp URL

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


    // Open WhatsApp

    window.location.href = whatsappUrl;
  };


  return (
    <section
      className="appointment-section"
      id="appointment"
    >

      <div className="container">

        <div className="appointment-wrapper">


          {/* =========================================
              LEFT SIDE
          ========================================= */}

          <div className="appointment-content">

            <span className="section-label">
              BOOK YOUR VISIT
            </span>


            <h2>
              Ready for a healthier,
              <span>more confident smile?</span>
            </h2>


            <p>
              Schedule a consultation with our dental
              team. We'll listen to your concerns, explain
              your options and help you plan the right
              next step.
            </p>


            {/* =====================================
                CONTACT OPTIONS
            ===================================== */}

            <div className="appointment-options">


              {/* CALL */}

              <a
                href="tel:+916363339707"
                className="appointment-option"
              >

                <span className="appointment-icon">
                  ☎
                </span>


                <div>

                  <small>
                    CALL US
                  </small>


                  <strong>
                    +91 63633 39707
                  </strong>

                </div>

              </a>


              {/* WHATSAPP */}

              <a
                href="https://wa.me/916363339707"
                className="appointment-option"
                target="_blank"
                rel="noopener noreferrer"
              >

                <span className="appointment-icon">
                  ↗
                </span>


                <div>

                  <small>
                    WHATSAPP
                  </small>


                  <strong>
                    Chat with our team
                  </strong>

                </div>

              </a>

            </div>

          </div>


          {/* =========================================
              APPOINTMENT CARD
          ========================================= */}

          <div className="appointment-form-card">


            {/* Heading */}

            <div className="form-heading">

              <h3>
                Request an Appointment
              </h3>


              <p>
                Fill in your details and we'll get
                back to you.
              </p>

            </div>


            {/* =====================================
                NAME + PHONE
            ===================================== */}

            <div className="form-row">


              {/* NAME */}

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>


                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>


              {/* PHONE */}

              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>


                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* =====================================
                EMAIL
            ===================================== */}

            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>


              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>


            {/* =====================================
                TREATMENT
            ===================================== */}

            <div className="form-group">

              <label htmlFor="treatment">
                Treatment
              </label>


              <select
                id="treatment"
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
              >

                <option value="">
                  Select a treatment
                </option>


                <option value="General Dentistry">
                  General Dentistry
                </option>


                <option value="Dental Implants">
                  Dental Implants
                </option>


                <option value="Root Canal Treatment">
                  Root Canal Treatment
                </option>


                <option value="Teeth Whitening">
                  Teeth Whitening
                </option>


                <option value="Braces & Aligners">
                  Braces & Aligners
                </option>


                <option value="Cosmetic Dentistry">
                  Cosmetic Dentistry
                </option>


                <option value="Pediatric Dentistry">
                  Pediatric Dentistry
                </option>


                <option value="Wisdom Tooth Removal">
                  Wisdom Tooth Removal
                </option>


                <option value="Other">
                  Other
                </option>

              </select>

            </div>


            {/* =====================================
                MESSAGE
            ===================================== */}

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>


              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us how we can help..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>

            </div>


            {/* =====================================
                BUTTON
            ===================================== */}

            <button
              type="button"
              className="primary-button form-button"
              onClick={handleSubmit}
            >

              Request Appointment

              <span>
                →
              </span>

            </button>


            {/* =====================================
                NOTE
            ===================================== */}

            <small className="form-note">
              Your request will open WhatsApp with
              your appointment details.
            </small>

          </div>

        </div>

      </div>

    </section>
  );
}