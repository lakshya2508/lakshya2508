import React from 'react';
import './styles/Contact.css'; // Make sure you create this CSS file as well

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-label">LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/lakshya-kucheriya-55276025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Lakshya Kucheriya
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-label">Instagram:</span>
          <a
            href="https://www.instagram.com/lakshya.__25/profilecard/?igsh=Z2VmZWU1NXQ4c2Rs"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            lakshya.__25
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-label">Phone:</span>
          <a href="tel:+917499173078" className="contact-link">
            +91 7499173078
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <a href="mailto:lakshkucheriya2005@gmail.com" className="contact-link">
            lakshkucheriya2005@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
