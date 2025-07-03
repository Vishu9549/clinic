import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/doctors', label: 'Our Doctors' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/faqs', label: 'FAQs' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Riddhi Siddhi Dental Care Logo" className="nav-logo-img" />
          <span>Riddhi Siddhi Dental Care</span>
        </Link>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item">
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="nav-social">
          <a href="tel:+919680588456" className="nav-social-link">
            <i className="fas fa-phone"></i>
          </a>
          <a href="https://wa.me/919680588456" target="_blank" rel="noopener noreferrer" className="nav-social-link">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/kapil.nagwa?rdid=hyTDB02uL3cAwCc9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19bhHKaGMV%2F#" target="_blank" rel="noopener noreferrer" className="nav-social-link">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="nav-social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 