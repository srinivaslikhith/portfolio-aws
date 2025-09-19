import React, { useState, useRef } from 'react';
import '../css/contact.css';
import emailjs from '@emailjs/browser';   // ✅ modern package
import ProfilePic from '../images/profile.jpeg';

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const serviceID = 'service_0ilvsqf';
      const templateID = 'template_qevo2cl';
      const userID = 'vRNxTvYEq1DaQ8oFy';

      await emailjs.sendForm(serviceID, templateID, formRef.current, userID);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-content">
          {/* Left side */}
          <div className="contact-left">
            <div className="profile-image-container">
              <img src={ProfilePic} alt="Profile" className="profile-image" />
            </div>

            <div className="contact-links">
              <h3>Let's Connect</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a href="mailto:likhithsrinivas9@gmail.com">
                    likhithsrinivas9@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone</span>
                  <a href="tel:+19342632462">+1 (934) 263-2462</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/srinivas-likhith/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    srinivas-likhith
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side (form) */}
          <div className="contact-right">
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
            >
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

              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
