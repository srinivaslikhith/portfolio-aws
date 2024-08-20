// src/components/js/about.js
import React from 'react';
import '../css/about.css'; // Import the specific stylesheet for About page

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
  html: htmlIcon,
  sql: sqlIcon,
  react: reactIcon,
  aws: awsIcon,
  docker: dockerIcon,
  jenkins: jenkinsIcon,
  git: gitIcon,
  kubernetes: kubIcon,
  redis: redisIcon,
  kafka: kafkaIcon,
  ngnix: ngnixIcon,
  django: djangoIcon,
  springboot: springIcon
  // Add more skills and their icons here
};

function About() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const timelineItems = [
    {
      title: "Stony Brook University",
      period: "Aug. 2023 – May 2025",
      details: [
        "Masters in Computer Science",
        "Coursework: Distributed Systems, Database Systems, Advanced Algorithms, Visualization",
      ],
    },
    {
      title: "Vellore Institute of Technology",
      period: "July 2018 – May 2022",
      details: [
        "Bachelor’s in Computer Science",
        "Coursework: Operating Systems, Data Structures, Object-Oriented Programming, Java, Computer Networks, AI",
      ],
    },
    {
      title: "Software Engineer 1 - Loconav",
      period: "June 2022 – July 2023",
      details: [
        "Developed an autonomous command management system for dashcams using Celery-beat, WebSockets, Redis, and Kafka.",
        "Developed an Over-the-Air (OTA) update system with a UI for managing package versions.",
        "Contributed to a live streaming system with React and backend integration with Nginx and HLS.",
        "Developed a version-based configuration management system using React, Celery, and Kafka.",
      ],
    },
    {
      title: "Backend Software Intern - Loconav",
      period: "Dec 2021 – June 2022",
      details: [
        "Built APIs and web applications for real-time vehicle data tracking.",
        "Developed a Traffic Sign Detector using MobileNetV2 and Python.",
        "Integrated applications with monitoring tools such as Elastic APM, Bugsnag, and SonarQube.",
      ],
    },
  ];

  return (
    <section id="about">
      <div className="timeline-container">
        <h1>About Me</h1>
        <h2>Education and Experience Timeline</h2>
        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.period}</p>
              </div>
              <div
                className={`timeline-details ${
                  hoveredIndex === index ? 'visible' : ''
                }`}
              >
                <ul>
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="content-container">
        <h2>Technical Skills</h2>

        <div className="skill-icons">
          {Object.entries(skillIcons).map(([skill, icon], index) => (
            <div className="skill-icon" key={index}>
              <img src={icon} alt={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
