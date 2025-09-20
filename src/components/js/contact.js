// Contact.jsx
import React from 'react';
import '../css/contact.css';

// ✅ Import your icons (place actual SVG files in /src/images/)
import emailIcon from '../images/email.svg';
import phoneIcon from '../images/phone.svg';
import linkedinIcon from '../images/linkedin.svg';
import githubIcon from '../images/github.svg';
import instagramIcon from '../images/instagram.svg';

function Contact() {
  const contacts = [
    { label: 'Email', link: 'mailto:srinivaslikhithr@gmail.com', icon: emailIcon },
    { label: 'Phone', link: 'tel:+19342632462', icon: phoneIcon },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/srinivaslikhithraichur/', icon: linkedinIcon },
    { label: 'GitHub', link: 'https://github.com/srinivaslikhith', icon: githubIcon },
    { label: 'Instagram', link: 'https://instagram.com/s._.likhith', icon: instagramIcon },
  ];

  return (
    <section id="contact">
      <div className="contact-orbit-container">
        {/* Center node */}
        <div className="orbit-center">Let's Connect</div>

        {/* Orbiting nodes */}
        <div className="orbit">
          {contacts.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`orbit-node orbit-node-${idx + 1}`}
              title={item.label}
            >
              <img src={item.icon} alt={item.label} className="orbit-icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
