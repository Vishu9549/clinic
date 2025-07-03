import React from 'react';
import './Facilities.css';

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      title: 'Digital X-Ray Imaging',
      icon: 'fas fa-x-ray',
      description: 'Advanced digital X-ray technology for accurate diagnosis with minimal radiation exposure.',
      features: ['High-resolution images', 'Reduced radiation', 'Instant results', 'Better diagnosis']
    },
    {
      id: 2,
      title: 'Modern Treatment Chairs',
      icon: 'fas fa-chair',
      description: 'Comfortable, ergonomic dental chairs designed for patient comfort during treatments.',
      features: ['Ergonomic design', 'Adjustable positions', 'Comfortable padding', 'Easy access']
    },
    {
      id: 3,
      title: 'Sterilization Equipment',
      icon: 'fas fa-shield-virus',
      description: 'State-of-the-art sterilization protocols ensuring the highest hygiene standards.',
      features: ['Autoclave sterilization', 'Disposable instruments', 'Hygiene protocols', 'Safety first']
    },
    {
      id: 4,
      title: 'Comfortable Waiting Area',
      icon: 'fas fa-couch',
      description: 'Relaxing waiting area with modern amenities for a pleasant patient experience.',
      features: ['Comfortable seating', 'Entertainment options', 'Refreshments', 'Wi-Fi access']
    },
    {
      id: 5,
      title: 'Advanced Dental Equipment',
      icon: 'fas fa-tools',
      description: 'Latest dental technology and equipment for precise and efficient treatments.',
      features: ['Laser technology', 'CAD/CAM systems', 'Intraoral cameras', 'Modern drills']
    },
    {
      id: 6,
      title: 'Hygienic Environment',
      icon: 'fas fa-spray-can',
      description: 'Clean, sanitized environment maintained to the highest standards of hygiene.',
      features: ['Regular cleaning', 'Air purification', 'Sanitization protocols', 'Clean surfaces']
    }
  ];

  return (
    <div className="facilities-page">
      <section className="facilities-hero">
        <div className="container">
          <div className="facilities-hero-content">
            <h1 className="fade-in">Our Modern Facilities</h1>
            <p className="fade-in">State-of-the-art equipment in a comfortable, hygienic environment</p>
          </div>
        </div>
      </section>

      <section className="facilities-main">
        <div className="container">
          <div className="facilities-intro">
            <h2>Why Our Facilities Matter</h2>
            <p>
              At Riddhi Siddhi Dental Care, we believe that modern facilities and advanced 
              technology are essential for providing the best dental care. Our clinic is 
              equipped with the latest dental technology and maintained to the highest 
              standards of hygiene and comfort.
            </p>
          </div>

          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div 
                key={facility.id} 
                className={`facility-card fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="facility-icon">
                  <i className={facility.icon}></i>
                </div>
                <h3>{facility.title}</h3>
                <p className="facility-description">{facility.description}</p>
                <div className="facility-features">
                  <ul>
                    {facility.features.map((feature, featureIndex) => (
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

      <section className="clinic-tour">
        <div className="container">
          <h2>Take a Virtual Tour</h2>
          <div className="tour-content">
            <div className="tour-text slide-in-left">
              <h3>Experience Our Clinic</h3>
              <p>
                Our clinic is designed with patient comfort and safety in mind. From the 
                moment you walk in, you'll notice our commitment to creating a welcoming 
                and professional environment.
              </p>
              <div className="tour-highlights">
                <div className="highlight-item">
                  <i className="fas fa-palette"></i>
                  <span>Modern Interior Design</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-leaf"></i>
                  <span>Relaxing Atmosphere</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-snowflake"></i>
                  <span>Climate Controlled</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-wifi"></i>
                  <span>Free Wi-Fi</span>
                </div>
              </div>
            </div>
            <div className="tour-image slide-in-right">
              <i className="fas fa-hospital"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="safety-standards">
        <div className="container">
          <h2>Our Safety & Hygiene Standards</h2>
          <div className="standards-grid">
            <div className="standard-card fade-in">
              <div className="standard-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Infection Control</h3>
              <p>Strict protocols for sterilization and disinfection of all equipment and surfaces.</p>
            </div>
            
            <div className="standard-card fade-in">
              <div className="standard-icon">
                <i className="fas fa-user-shield"></i>
              </div>
              <h3>Personal Protection</h3>
              <p>Our staff uses appropriate PPE and follows safety guidelines to protect patients.</p>
            </div>
            
            <div className="standard-card fade-in">
              <div className="standard-icon">
                <i className="fas fa-hand-sparkles"></i>
              </div>
              <h3>Hand Hygiene</h3>
              <p>Regular hand washing and sanitization practices by all staff members.</p>
            </div>
            
            <div className="standard-card fade-in">
              <div className="standard-icon">
                <i className="fas fa-wind"></i>
              </div>
              <h3>Air Quality</h3>
              <p>Advanced air filtration systems to maintain clean, fresh air in our clinic.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="visit-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Experience Our Modern Facilities</h2>
            <p>Visit our clinic to see our state-of-the-art equipment and comfortable environment firsthand.</p>
            <div className="cta-buttons">
              <a href="tel:+15551234567" className="btn btn-primary">
                <i className="fas fa-phone"></i>
                Schedule a Visit
              </a>
              <a href="/contact" className="btn btn-secondary">
                <i className="fas fa-map-marker-alt"></i>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities; 