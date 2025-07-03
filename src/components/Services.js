import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'General Dentistry',
      icon: 'fas fa-tooth',
      description: 'Comprehensive dental care including fillings, cleanings, and preventive treatments to maintain your oral health.',
      features: ['Dental Check-ups', 'Teeth Cleaning', 'Cavity Fillings', 'Root Canal Treatment', 'Gum Disease Treatment']
    },
    {
      id: 2,
      title: 'Cosmetic Dentistry',
      icon: 'fas fa-star',
      description: 'Transform your smile with professional whitening, veneers, and crowns to achieve the perfect look you desire.',
      features: ['Teeth Whitening', 'Dental Veneers', 'Dental Crowns', 'Smile Makeover', 'Bonding']
    },
    {
      id: 3,
      title: 'Dental Implants',
      icon: 'fas fa-screw',
      description: 'Permanent tooth replacement solutions that look, feel, and function like natural teeth for a confident smile.',
      features: ['Single Implants', 'Multiple Implants', 'Full Arch Implants', 'Implant-Supported Dentures']
    },
    {
      id: 4,
      title: 'Orthodontics',
      icon: 'fas fa-braces',
      description: 'Straighten your teeth with modern braces and clear aligners for a perfectly aligned smile.',
      features: ['Traditional Braces', 'Clear Aligners', 'Retainers', 'Early Orthodontic Treatment']
    },
    {
      id: 5,
      title: 'Emergency Dentistry',
      icon: 'fas fa-ambulance',
      description: 'Immediate care for dental emergencies including fractures, severe pain, and urgent dental issues.',
      features: ['Toothache Relief', 'Broken Tooth Repair', 'Lost Filling/Crown', 'Dental Trauma']
    },
    {
      id: 6,
      title: 'Pediatric Dentistry',
      icon: 'fas fa-baby',
      description: 'Specialized dental care for children in a friendly, comfortable environment to ensure healthy smiles from an early age.',
      features: ['Child Dental Check-ups', 'Preventive Care', 'Fluoride Treatment', 'Dental Sealants']
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1 className="fade-in">Our Dental Services</h1>
            <p className="fade-in">Comprehensive dental care for you and your family</p>
          </div>
        </div>
      </section>

      <section className="services-main">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`service-card fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  <h4>Services Include:</h4>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Our Dental Services?</h2>
          <div className="reasons-grid">
            <div className="reason-card fade-in">
              <div className="reason-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <h3>Expert Team</h3>
              <p>Our experienced dentists and staff are committed to providing the highest quality care.</p>
            </div>
            
            <div className="reason-card fade-in">
              <div className="reason-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Modern Technology</h3>
              <p>We use the latest dental technology and equipment for precise and comfortable treatments.</p>
            </div>
            
            <div className="reason-card fade-in">
              <div className="reason-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Patient Comfort</h3>
              <p>We prioritize your comfort with a relaxing environment and gentle care approach.</p>
            </div>
            
            <div className="reason-card fade-in">
              <div className="reason-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Safety First</h3>
              <p>We follow strict sterilization protocols and maintain the highest hygiene standards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="appointment-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Smile?</h2>
            <p>Schedule a consultation with our dental experts and discover the perfect treatment plan for you.</p>
            <div className="cta-buttons">
              <a href="tel:+919680588456" className="btn btn-primary">
                <i className="fas fa-phone"></i>
                Call for Appointment
              </a>
              <a href="https://wa.me/919680588456" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <i className="fab fa-whatsapp"></i>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 