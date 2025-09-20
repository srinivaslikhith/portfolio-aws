import React, { useState } from 'react';
import '../css/Intro.css';

function Intro() {
  const experienceItems = [
    {
      title: 'Graduate Researcher',
      org: 'Stony Brook University',
      period: 'Jan 2023 – Present',
      details: [
        'Collected and anonymized clinical datasets from Stony Brook Hospital for large-scale analysis.',
        'Designed a PostgreSQL-backed system to store and query fetal heart rate (FHR) signals and clinical data.',
        'Built an LLM-powered query interface with FastAPI and GPT, enabling natural language to SQL conversion for clinicians.',
      ],
    },
    {
      title: 'Software Engineer',
      org: 'LocoNav',
      period: 'Jan 2022 – Aug 2023',
      details: [
        'Built scalable backend services handling real-time telemetry and video feeds from 50,000+ IoT dashcams.',
        'Implemented a distributed task orchestration engine with retries, scheduling, and fault recovery mechanisms.',
        'Developed a versioned configuration management system with an intuitive frontend for group-based device settings.',
        'Created a live video monitoring dashboard with sub-4s latency streaming supporting multiple concurrent sessions.',
      ],
    },
  ];

  const educationItems = [
    {
      title: 'Master’s in Computer Science',
      org: 'Stony Brook University',
      period: 'Aug 2023 – May 2025',
      details: [
        'Coursework: Distributed Systems, Database Systems, Advanced Algorithms, Visualization',
      ],
    },
    {
      title: 'Bachelor’s in Computer Science',
      org: 'Vellore Institute of Technology',
      period: 'July 2018 – May 2022',
      details: [
        'Coursework: Operating Systems, Data Structures, OOP, Java, Networks, AI',
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState('experience');
  const [activeIndex, setActiveIndex] = useState(0);

  const currentItems = activeTab === 'experience' ? experienceItems : educationItems;
  const activeItem = currentItems[activeIndex];

  return (
    <section id="intro">
      <div className="intro-container">
        {/* <h2 className="section-title">{'<Experience & Education />'}</h2> */}

        {/* Toggle buttons */}
        <div className="tab-switcher">
          <button
            className={activeTab === 'experience' ? 'active' : ''}
            onClick={() => {
              setActiveTab('experience');
              setActiveIndex(0);
            }}
          >
            Experience
          </button>
          <button
            className={activeTab === 'education' ? 'active' : ''}
            onClick={() => {
              setActiveTab('education');
              setActiveIndex(0);
            }}
          >
            Education
          </button>
        </div>

        <div className="tabs-layout">
          {/* Left column: list */}
          <div className="tabs-list">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className={`tab-item ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <h4>{item.title}</h4>
                <span className="org">{item.org}</span>
              </div>
            ))}
          </div>

          {/* Right column: details */}
          <div className="tab-details">
            <h3>{activeItem.title}</h3>
            <h4 className="org">{activeItem.org}</h4>
            <p className="period">{activeItem.period}</p>
            <ul>
              {activeItem.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
