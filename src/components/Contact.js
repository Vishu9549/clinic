import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create email body
      const emailBody = `
New Appointment Request from Riddhi Siddhi Dental Care Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interested In: ${formData.service}
Message: ${formData.message}

This message was sent from the clinic's contact form.
      `;

      // Open default email client with pre-filled details
      const mailtoLink = `mailto:kapilnagwa4861@gmail.com?subject=New Appointment Request - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoLink);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="fade-in">Contact Us</h1>
            <p className="fade-in">Get in touch with our dental care team</p>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info slide-in-left">
              <h2>Get in Touch</h2>
              <p>
                We're here to help with all your dental care needs. Contact us 
                through any of the methods below and we'll get back to you promptly.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Address</h4>
                    <p>F2 City Pulse Complex Near Mital Hospital <br />Sikar(Raj.) - 332001</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+91 9680588456 </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>kapilnagwa4861@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday-Sunday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="https://www.facebook.com/kapil.nagwa?rdid=hyTDB02uL3cAwCc9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19bhHKaGMV%2F#" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://wa.me/919680588456" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="https://www.instagram.com/riddhi_siddhi_dental_care/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="tel:+919680588456" className="social-link">
                    <i className="fas fa-phone"></i>
                  </a>
                  <a href="mailto:kapilnagwa4861@gmail.com" className="social-link">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            
                        <div className="contact-map slide-in-right">
              <div className="map-container">
                <div className="map-placeholder">
                  <a href="https://www.google.com/maps/dir/27.6709318,75.1895572/J562%2B56Q+Riddhi+Siddhi+dental+care,+city+plus+complex,+Ward+No+35,+Sakpura+Mohlla,+Sikar,+Rajasthan+332001/@27.6457851,75.1306021,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x396ca500024a390b:0xf7aeb7f5bad1b2be!2m2!1d75.1506254!2d27.6104616?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="map-link">
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>View on Google Maps</h3>
                    <p>Click to open our location</p>
                    <span className="map-address">F2 City Pulse Complex Near Mital Hospital, Sikar(Raj.) - 332001</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="form-content">
            <h2>Send us a Message</h2>
            <p>Have a question or want to schedule an appointment? Fill out the form below.</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <p>Thank you! Your message has been sent. We'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  <p>Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    <option value="General Dentistry">General Dentistry</option>
                    <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Orthodontics">Orthodontics</option>
                    <option value="Emergency Dentistry">Emergency Dentistry</option>
                    <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                <i className={isSubmitting ? "fas fa-spinner fa-spin" : "fas fa-paper-plane"}></i>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="emergency-contact">
        <div className="container">
          <div className="emergency-content">
            <h2>Dental Emergency?</h2>
            <p>For urgent dental care, call us immediately</p>
            <div className="emergency-phone">
              <a href="tel:+919680588456" className="emergency-btn">
                <i className="fas fa-phone"></i>
                +91 9680588456
              </a>
            </div>
            <p className="emergency-note">Available 24/7 for emergency dental care</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 