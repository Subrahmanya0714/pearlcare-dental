"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">

        <a href="/" className="logo">
          <span className="logo-icon">✦</span>

          <div>
            <strong>PearlCare</strong>
            <small>Dental Studio</small>
          </div>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#treatments" onClick={() => setMenuOpen(false)}>Treatments</a>
          <a href="#doctor" onClick={() => setMenuOpen(false)}>Doctor</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <a href="#appointment" className="nav-button">
          Book Appointment
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

      </div>
    </header>
  );
}