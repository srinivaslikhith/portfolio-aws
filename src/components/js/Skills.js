// Skills.js
import React from 'react';
import '../css/skills.css';

function Skills() {
  const categories = {
    'Programming Languages': [
      'Java', 'Python', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS', 'Shell Scripting'
    ],
    'Frameworks & Libraries': [
      'Spring Boot', 'Spring MVC', 'Spring Security', 'Django', 'Flask',
      'React.js', 'Node.js', 'Nginx', 'REST APIs', 'GraphQL'
    ],
    'Cloud Platforms & DevOps': [
      'AWS (EC2, S3, Lambda, RDS, SNS, SQS, IAM)', 'Azure', 'Docker',
      'Jenkins', 'Terraform', 'Kubernetes'
    ],
    'Databases': [
      'MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'NoSQL'
    ],
    'Monitoring & Logging': [
      'Prometheus', 'Grafana', 'ELK Stack', 'Elastic APM', 'Datadog'
    ],
    'Messaging & Streaming': [
      'Apache Kafka', 'RTMP', 'HLS', 'AWS SQS', 'Celery'
    ],
  };

  return (
    <section id="skills">
      <div className="skills-container">
        {/* <h2 className="section-title">{'<Skills />'}</h2> */}

        <div className="skills-grid">
          {Object.entries(categories).map(([category, skills], index) => (
            <div key={index} className="skill-panel">
              <h3 className="skill-category">{category}</h3>
              <ul className="skill-list">
                {skills.map((skill, i) => (
                  <li key={i} className="skill-item">▹ {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
