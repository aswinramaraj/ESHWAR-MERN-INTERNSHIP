import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Gowtham S L</h1>
          <p className="hero-description">
            Passionate second-year college student dedicated to creating 
            interactive and visually stunning web experiences.
          </p>
          <div className="hero-cta-wrapper">
            <Link to="/projects" className="primary-button hero-cta">
              Explore My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3 className="skill-title">Web Development</h3>
            <p className="skill-description">
              Creating responsive and dynamic web applications
            </p>
          </div>
          <div className="skill-card">
            <h3 className="skill-title">UI/UX Design</h3>
            <p className="skill-description">
              Designing intuitive and engaging user interfaces
            </p>
          </div>
          <div className="skill-card">
            <h3 className="skill-title">Database Management</h3>
            <p className="skill-description">
              Efficient data modeling and management
            </p>
          </div>

          <div className="skill-card">
            <h3 className="skill-title">Data Science</h3>
            <p className="skill-description">
              Efficient data Handling and Data Visualization
            </p>
          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Collaborate?</h2>
          <p className="cta-description">
            Interested in innovative projects and meaningful collaborations
          </p>
          <div className="cta-button-wrapper">
            <Link to="/contact" className="primary-button cta-button">
              Contact Me
            </Link>
          </div>
          
          {/* Social Icons */}
          <div className="social-links">
            <a href="https://github.com/Gowthams012" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/gowtham-sl-1ba1122b1/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="mailto:slgowtham42@gmail.com">
              <FaEnvelope className="social-icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;