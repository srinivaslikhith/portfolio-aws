import React, { useState } from 'react';
import '../css/Intro.css';

function TimelineItem({ title, period, details }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`timeline-item ${isOpen ? 'open' : ''}`}>
      <div
        className="timeline-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="timeline-title">
          <h3>{title}</h3>
          <span className="period">{period}</span>
        </div>
        <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
      </div>

      {isOpen && (
        <ul className="timeline-details">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Intro() {
  const experienceItems = [
    {
      title: 'Graduate Researcher - Stony Brook University',
      period: 'Jan 2023 – Present',
      details: [
        'Collected and anonymized clinical datasets from Stony Brook Hospital for large-scale analysis.',
        'Designed a PostgreSQL-backed system to store and query fetal heart rate (FHR) signals and clinical data.',
        'Built an LLM-powered query interface with FastAPI and GPT, enabling natural language to SQL conversion for clinicians.',
      ],
    },
    {
      title: 'Software Engineer - LocoNav',
      period: 'Jan 2022 – Aug 2023',
      details: [
        'Built scalable backend services handling real-time telemetry and video feeds from 50,000+ IoT dashcams.',
        'Implemented a distributed task orchestration engine with retries, scheduling, and fault recovery mechanisms.',
        'Developed a versioned configuration management system with an intuitive frontend for group-based device settings.',
        'Created a live video monitoring dashboard with sub-4s latency streaming supporting multiple concurrent sessions.',
        'Built secure REST APIs for vehicle tracking and on-demand video delivery with real-time metadata overlays.',
        'Automated CI/CD workflows with containerized deployments and enforced 85%+ test coverage for code reliability.',
        'Integrated monitoring and observability with Elastic APM, Datadog, Prometheus, and Grafana.',
      ],
    },
  ];

  const educationItems = [
    {
      title: 'Stony Brook University',
      period: 'Aug. 2023 – May 2025',
      details: [
        'Masters in Computer Science',
        'Coursework: Distributed Systems, Database Systems, Advanced Algorithms, Visualization',
      ],
    },
    {
      title: 'Vellore Institute of Technology',
      period: 'July 2018 – May 2022',
      details: [
        "Bachelor’s in Computer Science",
        'Coursework: Operating Systems, Data Structures, Object-Oriented Programming, Java, Computer Networks, AI',
      ],
    },
  ];

  return (
    <section id="intro">
      <div className="intro-container">
        <div className="timeline-section">
          <h2 className="section-title">{'<Experience />'}</h2>
          <div className="timeline">
            {experienceItems.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="timeline-section">
          <h2 className="section-title">{'<Education />'}</h2>
          <div className="timeline">
            {educationItems.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
