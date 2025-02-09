import React, { useState } from 'react';
import '../css/contact.css';
import emailjs from 'emailjs-com';
import ProfilePic from '../images/profile.jpeg';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_0ilvsqf';
    const templateID = 'template_qevo2cl';
    const userID = 'vRNxTvYEq1DaQ8oFy';

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        alert('Failed to send message.');
      });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="section-title">{"<Contact />"}</h2>
        
        <div className="contact-content">
          <div className="contact-left">
            <div className="profile-image-container">
              <img src={ProfilePic} alt="Profile" className="profile-image" />
            </div>
            
            <div className="contact-links">
              <h3>Let's Connect</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a href="mailto:likhithsrinivas9@gmail.com">likhithsrinivas9@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone</span>
                  <a href="tel:+19342632462">+1 (934) 263-2462</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/srinivas-likhith/" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    srinivas-likhith
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;