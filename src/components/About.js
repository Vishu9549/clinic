import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="fade-in">About Riddhi Siddhi Dental Care</h1>
            <p className="fade-in">Your Smile, Our Priority</p>
          </div>
        </div>
      </section>

      <section className="about-main">
        <div className="container">
          <div className="about-content">
            <div className="about-text slide-in-left">
              <h2>Our Story</h2>
              <p>
                At Riddhi Siddhi Dental Care, we believe in providing exceptional dental care 
                in a comfortable and welcoming environment. Our journey began with a simple 
                mission: to make quality dental care accessible to everyone while ensuring 
                the highest standards of treatment and patient comfort.
              </p>
              <p>
                With years of experience and a commitment to continuous learning, our team 
                of experienced professionals is dedicated to ensuring your oral health and 
                creating beautiful smiles that last a lifetime.
              </p>
            </div>
            <div className="about-image slide-in-right">
              <i className="fas fa-user-md"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card fade-in">
              <div className="card-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide high-quality, comprehensive dental care that promotes oral health 
                and enhances the quality of life for our patients. We strive to create a 
                comfortable environment where patients feel valued and cared for.
              </p>
            </div>
            
            <div className="vision-card fade-in">
              <div className="card-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading dental care provider known for excellence, innovation, 
                and patient-centered care in our community. We aim to set new standards 
                in dental healthcare delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card fade-in">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Compassion</h3>
              <p>We treat every patient with kindness, empathy, and understanding.</p>
            </div>
            
            <div className="value-card fade-in">
              <div className="value-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Excellence</h3>
              <p>We maintain the highest standards of dental care and professional ethics.</p>
            </div>
            
            <div className="value-card fade-in">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Patient-Centered</h3>
              <p>Your comfort, safety, and satisfaction are our top priorities.</p>
            </div>
            
            <div className="value-card fade-in">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We embrace the latest technology and techniques for better outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="commitment">
        <div className="container">
          <div className="commitment-content">
            <h2>Our Commitment to You</h2>
            <div className="commitment-grid">
              <div className="commitment-item fade-in">
                <i className="fas fa-shield-alt"></i>
                <h3>Safe & Hygienic</h3>
                <p>We follow strict sterilization protocols and maintain the highest hygiene standards.</p>
              </div>
              
              <div className="commitment-item fade-in">
                <i className="fas fa-clock"></i>
                <h3>Timely Care</h3>
                <p>We respect your time and ensure prompt, efficient dental care services.</p>
              </div>
              
              <div className="commitment-item fade-in">
                <i className="fas fa-graduation-cap"></i>
                <h3>Continuous Learning</h3>
                <p>Our team regularly updates their skills and knowledge to provide the best care.</p>
              </div>
              
              <div className="commitment-item fade-in">
                <i className="fas fa-handshake"></i>
                <h3>Transparent Communication</h3>
                <p>We believe in clear, honest communication about your treatment options and costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 