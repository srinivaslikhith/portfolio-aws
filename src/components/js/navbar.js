import React from 'react';
import '../css/navbar.css';

function Navbar({ activeSection }) {
  const links = [
    { id: 'home', label: '< Home />' },
    { id: 'intro', label: '< Intro />' },
    { id: 'projects', label: '< Projects />' },
    { id: 'contact', label: '< Contact />' },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : ''}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
