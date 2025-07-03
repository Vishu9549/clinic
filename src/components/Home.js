import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="fade-in">
              Welcome to <span className="highlight">Riddhi Siddhi Dental Care</span>
            </h1>
            <p className="hero-description fade-in">
              Your trusted partner for comprehensive dental care with modern technology 
              and compassionate service. We are committed to providing exceptional 
              dental care in a comfortable and welcoming environment.
            </p>
            <div className="hero-buttons fade-in">
              <Link to="/contact" className="btn btn-primary">
                <i className="fas fa-calendar-alt"></i>
                Book Appointment
              </Link>
              <Link to="/services" className="btn btn-secondary">
                <i className="fas fa-tooth"></i>
                Our Services
              </Link>
            </div>
          </div>
          <div className="hero-image slide-in-right">
            <i className="fas fa-tooth"></i>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <h3>Expert Dentists</h3>
              <p>Experienced and qualified dental professionals dedicated to your oral health.</p>
            </div>
            
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Modern Technology</h3>
              <p>State-of-the-art equipment and advanced dental technology for precise treatments.</p>
            </div>
            
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Patient Care</h3>
              <p>Compassionate care in a comfortable, hygienic environment designed for your comfort.</p>
            </div>
            
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Emergency Care</h3>
              <p>24/7 emergency dental services for urgent dental issues and pain relief.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for a Healthier Smile?</h2>
            <p>Schedule your appointment today and take the first step towards optimal oral health.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <i className="fas fa-phone"></i>
                Call Now
              </Link>
              <Link to="/services" className="btn btn-secondary">
                <i className="fas fa-info-circle"></i>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 