import React from 'react';
import '../css/Intro.css';

function TimelineItem({ title, period, details }) {
  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <div className="timeline-header">
          <h3>{title}</h3>
          <span className="period">{period}</span>
        </div>
        <ul className="timeline-details">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Intro() {
  const timelineItems = [
    {
      title: 'Stony Brook University',
      period: 'Aug. 2023 – May 2025',
      details: [
        'Masters in Computer Science',
        'Coursework: Distributed Systems, Database Systems, Advanced Algorithms, Visualization',
      ],
    },
    {
      title: 'Software Engineer 1 - Loconav',
      period: 'June 2022 – July 2023',
      details: [
        'Developed an autonomous command management system for dashcams using Celery-beat, WebSockets, Redis, and Kafka.',
        'Developed an Over-the-Air (OTA) update system with a UI for managing package versions.',
        'Contributed to a live streaming system with React and backend integration with Nginx and HLS.',
        'Developed a version-based configuration management system using React, Celery, and Kafka.',
      ],
    },
    {
      title: 'Backend Software Intern - Loconav',
      period: 'Dec. 2021 – June 2022',
      details: [
        'Built APIs and web applications for real-time vehicle data tracking.',
        'Developed a Traffic Sign Detector using MobileNetV2 and Python.',
        'Integrated applications with monitoring tools such as Elastic APM, Bugsnag, and SonarQube.',
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
          <h2 className="section-title">{'<Education & Experience />'}</h2>
          <div className="timeline">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;