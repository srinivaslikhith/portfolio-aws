import React, { useState } from 'react';import '../css/projects.css';
import plasmaImage from '../images/blood.avif';
import chatbotImage from '../images/chatbot.jpeg';
import clusterImage from '../images/bigdata.jpg';
import bankImage from '../images/bank.webp';
import blockchainImage from '../images/bchain.webp';
import pbftImage from '../images/pbft.png';
import adachainImage from '../images/adachain.png';
import dsdbImage from '../images/dsdb.png';
import taImage from '../images/TA.png';
import fleetImage from '../images/fleet.png';

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

// ✅ Group projects by category
const categories = {
  "Blockchain & Distributed Databases": [
    {
      title: 'ConsensusX | Self-Optimizing Blockchain Platform',
      description: 'Implemented an adaptive blockchain system integrating BFT consensus protocols (PBFT, SBFT, HotStuff) with architectures (OX, OXII, XOV, XOV++) to handle varying workloads and Byzantine fault scenarios. Developed a reinforcement learning agent for dynamic configuration tuning, achieving ~27% higher throughput than fixed setups.',
      image: adachainImage,
      link: '',
      tags: ['Blockchain', 'Distributed System', 'C++', 'Reinforcement Learning', 'BFT']
    },
    {
      title: 'Linear PBFT | Low-Complexity Consensus for Blockchains',
      description: 'Developed a permissioned blockchain protocol using Linear PBFT, drastically reducing message complexity compared to classical PBFT. Added view-change and checkpointing mechanisms to tolerate Byzantine replicas while ensuring safety and liveness under network faults.',
      image: pbftImage,
      link: 'https://github.com/srinivaslikhith/linear-pbft',
      tags: ['Blockchain', 'Distributed Consensus', 'C++', 'gRPC', 'Linear PBFT']
    },
    {
      title: 'APaxos: Distributed Sharded Database',
      description: 'Built a distributed sharded database using a modified Paxos algorithm with snapshots for fast state catch-up. When a node encounters insufficient balance, it attempts to become leader and initiates a consensus round, ensuring all nodes stay up-to-date while supporting intra- and cross-shard transactions with 2PL and 2PC for consistency and fault tolerance.',
      image: dsdbImage,
      link: 'https://github.com/srinivaslikhith/2pc-paxos',
      tags: ['Distributed Database', 'Consensus', 'C++', 'gRPC', 'Paxos', 'Sharding', '2PC', '2PL', 'Snapshots']
    }
  ],

  "AI & Machine Learning": [
    {
      title: 'Deep Learning Chatbot',
      description: 'Research article on chatbot functionality, highlighting neural network training with intent data. Developed a Python prototype to demonstrate these concepts.',
      image: chatbotImage,
      link: 'https://www.warse.org/IJATCSE/static/pdf/file/ijatcse741032021.pdf',
      tags: ['Python', 'Neural Networks', 'NLP']
    },
    {
      title: 'Optimized IVF Clustering',
      description: 'Implemented and benchmarked clustering algorithms to optimize Inverted File Indexing for high-dimensional vector embeddings, focusing on efficiency, information loss, and balance.',
      image: clusterImage,
      link: '',
      tags: ['Clustering', 'Vector Embeddings', 'Optimization']
    },
    {
    title: 'AI Teaching Assistant | Fine-Tuned LLaMA Model',
    description: 'Applied LoRA-based fine-tuning on Meta’s LLaMA-3.2B with 4-bit quantization and mixed-precision training over domain-specific transcripts to build an efficient academic chatbot. Deployed via FastAPI and Streamlit with dynamic batching and KV caching to deliver fast student-facing Q&A with <2s latency.',
    image: taImage,
    link: '',
    tags: ['AI', 'Chatbot', 'LLaMA', 'PyTorch', 'Transformers', 'FastAPI']
  }
  ],

  "Software Engineering & Microservices": [
    {
      title: 'FleetUpdater | IoT Device Management',
      description: 'Built a backend microservice with REST APIs and a ReactJS frontend to enable secure OTA updates for IoT devices using AWS S3 presigned URLs, checksum validation, and recovery mechanisms resilient to reboots and unreliable networks. Developed a React dashboard to manage device groups and track installations across thousands of devices.',
      image: fleetImage,
      link: '',
      tags: ['IoT', 'Device Management', 'ReactJS', 'AWS S3', 'Microservices', 'OTA Updates']
    },
    {
      title: 'Plasma Donor App',
      description: "Developed a plasma donor web app, cutting deployment time by 70% with Docker and a Jenkins CI/CD pipeline. Utilized AWS Lambda, API Gateway, and DynamoDB for scalable data handling, with Amazon SNS for real-time notifications.",
      image: plasmaImage,
      link: 'https://github.com/srinivaslikhith/dynamite',
      tags: ['Containerization', 'Jenkins', 'AWS', 'CI/CD']
    }
  ]
};

function Projects({ skillsRef }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="projects">
      <div className="projects-container">
        {/* <h2 className="section-title">{"<Projects />"}</h2> */}

        {/* Categories loop unchanged */}
        {Object.entries(categories).map(([category, projects]) => (
          <div key={category} className="project-category">
            <h3 className="category-title">{category}</h3>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div className="project-card" key={index}>
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-overlay">
                      {project.link && (
                        <a
                          href={project.link}
                          className="view-project-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Skills Section */}
      <div className="skills-section" ref={skillsRef}>
        <h2 className="section-title">{'<Skills />'}</h2>

        <div className="skills-bubble-grid">
          {Object.entries(skillIcons).map(([skill, icon]) => (
            <div
              key={skill}
              className={`skill-bubble ${hoveredSkill === skill ? 'active' : ''}`}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              onMouseMove={handleMouseMove}
            >
              <img src={icon} alt={skill} className="skill-bubble-icon" />
            </div>
          ))}
        </div>

        {/* Floating tooltip */}
        {hoveredSkill && (
          <div
            className="skill-tooltip"
            style={{ top: mousePos.y + 20, left: mousePos.x + 20 }}
          >
            {hoveredSkill}
          </div>
        )}
      </div>
    </section>
  );
}



export default Projects;
