import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Priya Patel',
      rating: 5,
      service: 'Braces (Dr. Kapil Sharma)',
      review: 'I am so happy with my new smile! Dr. Kapil Sharma was very patient and explained every step of my braces treatment. The results are fantastic and the clinic staff is very friendly.',
      date: '2024'
    },
    {
      id: 2,
      name: 'Amit Sharma',
      rating: 5,
      service: 'Clear Aligners (Dr. Sandeep Chauhan)',
      review: 'Dr. Sandeep Chauhan made my aligner journey smooth and comfortable. I was worried at first, but he made sure I understood the process. My teeth are now perfectly aligned!',
      date: '2024'
    },
    {
      id: 3,
      name: 'Sunita Verma',
      rating: 5,
      service: 'Dental Implants (Dr. Pradeep Kumar)',
      review: 'I lost a tooth last year and was very anxious. Dr. Pradeep Kumar did my implant surgery with great care. The procedure was painless and I am very satisfied with the result.',
      date: '2024'
    },
    {
      id: 4,
      name: 'Rohit Mehra',
      rating: 5,
      service: 'Retainers (Dr. Kapil Sharma)',
      review: 'After my braces, Dr. Kapil Sharma provided me with retainers and explained how to use them. He is very knowledgeable and always available for follow-ups.',
      date: '2024'
    },
    {
      id: 5,
      name: 'Neha Singh',
      rating: 5,
      service: 'Wisdom Tooth Extraction (Dr. Pradeep Kumar)',
      review: 'I was scared of getting my wisdom tooth removed, but Dr. Pradeep Kumar made the process easy and painless. The recovery was quick and I had no issues.',
      date: '2024'
    },
    {
      id: 6,
      name: 'Vikas Joshi',
      rating: 5,
      service: 'Invisible Aligners (Dr. Sandeep Chauhan)',
      review: 'Dr. Sandeep Chauhan is an expert in aligners. My treatment was completed on time and I am very happy with my new smile. Highly recommended!',
      date: '2024'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`fas fa-star ${index < rating ? 'filled' : ''}`}
      ></i>
    ));
  };

  return (
    <div className="reviews-page">
      <section className="reviews-hero">
        <div className="container">
          <div className="reviews-hero-content">
            <h1 className="fade-in">Patient Reviews</h1>
            <p className="fade-in">What our patients say about their experience</p>
          </div>
        </div>
      </section>

      <section className="reviews-main">
        <div className="container">
          <div className="reviews-intro">
            <h2>Real Patient Experiences</h2>
            <p>
              We take pride in the positive feedback from our patients. Their satisfaction 
              and trust are our greatest achievements. Read what our patients have to say 
              about their dental care experience at Riddhi Siddhi Dental Care.
            </p>
          </div>

          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div 
                key={review.id} 
                className={`review-card fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="review-header">
                  <div className="stars">
                    {renderStars(review.rating)}
                  </div>
                  <div className="review-service">
                    <i className="fas fa-tooth"></i>
                    <span>{review.service}</span>
                  </div>
                </div>
                
                <div className="review-content">
                  <p>"{review.review}"</p>
                </div>
                
                <div className="review-footer">
                  <div className="reviewer-info">
                    <h4>{review.name}</h4>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card fade-in">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Patients</div>
            </div>
            
            <div className="stat-card fade-in">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Average Rating</div>
            </div>
            
            <div className="stat-card fade-in">
              <div className="stat-number">98%</div>
              <div className="stat-label">Patient Satisfaction</div>
            </div>
            
            <div className="stat-card fade-in">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Happy Patients</h2>
            <p>Experience the same quality care and excellent service that our patients rave about.</p>
            <div className="cta-buttons">
              <a href="tel:+919680588456" className="btn btn-primary">
                <i className="fas fa-phone"></i>
                Book Appointment
              </a>
              <a href="/contact" className="btn btn-secondary">
                <i className="fas fa-comments"></i>
                Leave a Review
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews; 