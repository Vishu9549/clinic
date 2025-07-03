import React, { useState } from 'react';
import './FAQs.css';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How often should I visit the dentist?',
      answer: 'We recommend visiting the dentist every 6 months for regular check-ups and cleanings to maintain optimal oral health. However, some patients may need more frequent visits based on their specific dental needs and risk factors.'
    },
    {
      id: 2,
      question: 'Do you accept insurance?',
      answer: 'Yes, we accept most major dental insurance plans. Please contact us to verify your specific coverage and we\'ll help you understand your benefits. We also offer flexible payment options for patients without insurance.'
    },
    {
      id: 3,
      question: 'What should I do in a dental emergency?',
      answer: 'For dental emergencies, call us immediately. We provide emergency dental care and will accommodate urgent cases as quickly as possible. Common emergencies include severe toothache, broken teeth, lost fillings, or dental trauma.'
    },
    {
      id: 4,
      question: 'How long does a dental implant procedure take?',
      answer: 'The complete dental implant process typically takes 3-6 months, including healing time. The actual surgery usually takes 1-2 hours per implant. The timeline varies depending on individual healing and the number of implants needed.'
    },
    {
      id: 5,
      question: 'Is teeth whitening safe?',
      answer: 'Yes, professional teeth whitening is safe when performed by qualified dentists. We use approved methods and monitor the process carefully. Professional whitening is more effective and safer than over-the-counter products.'
    },
    {
      id: 6,
      question: 'At what age should my child first visit the dentist?',
      answer: 'Children should have their first dental visit by their first birthday or when their first tooth appears, whichever comes first. Early visits help establish good oral hygiene habits and prevent dental problems.'
    },
    {
      id: 7,
      question: 'What are the signs of gum disease?',
      answer: 'Common signs of gum disease include red, swollen, or bleeding gums, persistent bad breath, loose teeth, and receding gums. Early detection and treatment are crucial to prevent more serious complications.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-page">
      <section className="faqs-hero">
        <div className="container">
          <div className="faqs-hero-content">
            <h1 className="fade-in">Frequently Asked Questions</h1>
            <p className="fade-in">Find answers to common dental questions</p>
          </div>
        </div>
      </section>

      <section className="faqs-main">
        <div className="container">
          <div className="faqs-intro">
            <h2>Common Questions</h2>
            <p>
              We understand you may have questions about dental care. Here are answers 
              to some of the most frequently asked questions. If you don't find what 
              you're looking for, please don't hesitate to contact us.
            </p>
          </div>

          <div className="faqs-container">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id} 
                className={`faq-item fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <i className={`fas fa-chevron-down ${activeIndex === index ? 'rotated' : ''}`}></i>
                </div>
                <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="contact-info-content">
            <h2>Still Have Questions?</h2>
            <p>We're here to help! Contact us for personalized answers to your dental questions.</p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h3>Call Us</h3>
                <p>Speak directly with our dental team</p>
                <a href="tel:+919680588456" className="method-link">+91 9680588456</a>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email Us</h3>
                <p>Send us your questions via email</p>
                <a href="mailto:kapilnagwa4861@gmail.com" className="method-link">kapilnagwa4861@gmail.com</a>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <h3>WhatsApp</h3>
                <p>Quick questions via WhatsApp</p>
                <a href="https://wa.me/919680588456" target="_blank" rel="noopener noreferrer" className="method-link">Send Message</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="appointment-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Schedule Your Visit?</h2>
            <p>Book an appointment with our dental experts and get all your questions answered in person.</p>
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

export default FAQs; 