import React from 'react';
import './Doctors.css';

const doctors = [
  {
    id: 1,
    name: 'Dr. Kapil Sharma',
    image: '/kapil.webp',
    experience: '2+ Years Experience',
    languages: ['English', 'Hindi'],
    title: 'Passionate and Committed to Your Oral Health',
    bio: 'Expertise in creating beautiful smiles. Provides advanced treatments, including braces, Invisalign, and more. Ensures a comfortable, friendly, and welcoming environment for patients of all ages.',
    servicesTitle: 'Orthodontic Services:',
    services: [
      'Traditional Braces for children, teens, and adults',
      'Invisible Clear Aligners',
      'Retainers and Post-Treatment Care',
      'Space Maintainers and Jaw Alignment',
    ],
  },
  {
    id: 2,
    name: 'Dr. Sandeep Chauhan',
    image: '/sandeep.webp',
    experience: '10+ Years Experience',
    languages: ['English', 'Hindi'],
    title: 'Skilled Orthodontist with Years of Experience',
    bio: 'Expertise in creating beautiful smiles. Provides advanced treatments, including braces, Invisalign, and more. Ensures a comfortable, friendly, and welcoming environment for patients of all ages.',
    servicesTitle: 'Orthodontic Services:',
    services: [
      'Traditional Braces for children, teens, and adults',
      'Invisible Clear Aligners',
      'Retainers and Post-Treatment Care',
      'Space Maintainers and Jaw Alignment',
    ],
  },
  {
    id: 3,
    name: 'Dr. Pradeep Kumar',
    image: '/pradeep.webp',
    experience: '15+ Years Experience',
    languages: ['English', 'Hindi'],
    title: 'Expert with Years of Specialized Experience',
    bio: 'Advanced treatment for gum disease, tooth loss, and implants. A gentle and compassionate approach tailored to each patient. Specializes in complex surgical and advanced cases.',
    servicesTitle: 'Specialized Services:',
    services: [
      'Dental Implants – Precise implant placement to restore your smile',
      'Bone Grafting – Strengthens jawbone for implants and better oral health',
      'Wisdom Tooth Extractions – Safe and effective removal with minimal recovery time',
    ],
  },
];

const Doctors = () => {
  return (
    <div className="doctors-page">
      <section className="doctors-hero">
        <div className="container">
          <div className="doctors-hero-content">
            <h1 className="fade-in">Meet Our Expert Doctors</h1>
            <p className="fade-in">Experienced and qualified dental professionals dedicated to your oral health</p>
          </div>
        </div>
      </section>

      <section className="doctors-main">
        <div className="container">
          <div className="doctors-intro">
            <h2>Our Dental Team</h2>
            <p>
              Our team of experienced and qualified dentists is committed to providing 
              the highest quality dental care. Each doctor brings unique expertise and 
              a passion for helping patients achieve healthy, beautiful smiles.
            </p>
          </div>

          <div className="doctors-grid">
            {doctors.map((doctor, index) => (
              <div 
                key={doctor.id} 
                className={`doctor-card fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="doctor-image">
                  <img src={doctor.image} alt={doctor.name} />
                </div>
                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <p className="experience">{doctor.experience}</p>
                  <div className="doctor-languages">
                    Languages: {doctor.languages.join(', ')}
                  </div>
                  <p className="specialization">{doctor.title}</p>
                  <div className="doctor-bio">
                    <p>{doctor.bio}</p>
                  </div>
                  <div className="doctor-expertise">
                    <h4>{doctor.servicesTitle}</h4>
                    {doctor.services.map((service, idx) => (
                      <div key={idx} className="doctor-service-block" style={{marginBottom: '10px'}}>
                        <i className="fas fa-check"></i> {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-values">
        <div className="container">
          <h2>Why Choose Our Team?</h2>
          <div className="values-grid">
            <div className="value-card fade-in">
              <div className="value-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Highly Qualified</h3>
              <p>All our doctors have advanced degrees and continuous education in their specialties.</p>
            </div>
            
            <div className="value-card fade-in">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Patient-Centered</h3>
              <p>We prioritize patient comfort and satisfaction in every treatment we provide.</p>
            </div>
            
            <div className="value-card fade-in">
              <div className="value-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Experienced</h3>
              <p>Combined experience of over 20 years in various dental specialties.</p>
            </div>
            
            <div className="value-card fade-in">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Team Approach</h3>
              <p>Collaborative care approach ensuring comprehensive treatment planning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="appointment-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Schedule a Consultation</h2>
            <p>Meet with our expert doctors to discuss your dental health and treatment options.</p>
            <div className="cta-buttons">
              <a href="tel:+919680588456" className="btn btn-primary">
                <i className="fas fa-phone"></i>
                Call for Appointment
              </a>
              <a href="/contact" className="btn btn-secondary">
                <i className="fas fa-calendar-alt"></i>
                Book Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors; 