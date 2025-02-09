import React from 'react';
import '../css/about.css';

// Import all skill icons
import jsIcon from '../images/js.svg';
import pyIcon from '../images/python.svg';
import javaIcon from '../images/java.svg';
import sqlIcon from '../images/sql.svg';
import htmlIcon from '../images/html.svg';
import dockerIcon from '../images/docker.svg';
import jenkinsIcon from '../images/jenkins.svg';
import gitIcon from '../images/git.svg';
import reactIcon from '../images/react.svg';
import awsIcon from '../images/aws.svg';
import kubIcon from '../images/kubernetes.svg';
import redisIcon from '../images/redis.svg';
import djangoIcon from '../images/django.svg';
import springIcon from '../images/springboot.svg';
import ngnixIcon from '../images/ngnix.svg';
import kafkaIcon from '../images/kafka.svg';

// Create a mapping of skills to icons
const skillIcons = {
  JavaScript: jsIcon,
  Python: pyIcon,
  Java: javaIcon,
  HTML: htmlIcon,
  SQL: sqlIcon,
  React: reactIcon,
  AWS: awsIcon,
  Docker: dockerIcon,
  Jenkins: jenkinsIcon,
  Git: gitIcon,
  Kubernetes: kubIcon,
  Redis: redisIcon,
  Kafka: kafkaIcon,
  NGINX: ngnixIcon,
  Django: djangoIcon,
  SpringBoot: springIcon,
};

function About() {
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
    <section id="about">
      <div className="about-container">
        <div className="timeline-section">
          <h2 className="section-title">{'<Education & Experience />'}</h2>
          <div className="timeline">
            {timelineItems.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{item.title}</h3>
                    <span className="period">{item.period}</span>
                  </div>
                  <ul className="timeline-details">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h2 className="section-title">{'<Skills />'}</h2>
          <div className="skills-grid">
            {Object.entries(skillIcons).map(([skill, icon]) => (
              <div key={skill} className="skill-item">
                <img src={icon} alt={skill} className="skill-icon" />
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;