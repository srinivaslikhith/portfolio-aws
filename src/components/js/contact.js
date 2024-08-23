import React, { useState } from 'react';
import '../css/contact.css'; // Import the specific stylesheet for the Contact page
import emailjs from 'emailjs-com';
import ProfilePic from '../images/profile.jpg'; // Assuming you have your image in the images folder

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

    // Replace these with your own EmailJS service ID, template ID, and user ID
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
        <div className="profile-image">
          <img src={ProfilePic} alt="Profile" />
        </div>
        <div className="contact-info">
          <h1>Contact Me</h1>
          <p>Feel free to reach out to me via the contact form below or through the following contact details:</p>
          <ul>
            <li>Email: likhithsrinivas9@gmail.com</li>
            <li>Phone: +19342632462</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/srinivas-likhith/" target="_blank" rel="noopener noreferrer">srinivas-likhith</a></li>
          </ul>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
