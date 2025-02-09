import React from 'react';
import '../css/projects.css';
import plasmaImage from '../images/blood.avif';
import chatbotImage from '../images/chatbot.jpeg';
import clusterImage from '../images/bigdata.jpg';
import bankImage from '../images/bank.webp';
import blockchainImage from '../images/bchain.webp';

const projects = [
  {
    title: 'Byzantine Fault-Tolerant Transactions',
    description: 'Designed a fault-tolerant, sharded database with replication, leader-based management, and Google Spanner-like architecture. Enabled atomic cross-shard transactions using WAL and 2PL, achieving 500ms latency with PBFT consensus.',
    image: bankImage,
    link: 'https://github.com/srinivaslikhith/2PC-PBFT',
    tags: ['Distributed System', 'C++', 'gRPC', 'MongoDB', 'PBFT']
  },
  {
    title: 'APAXOS: Blockchain-Inspired Bank',
    description: 'Developed a block-based consensus protocol for handling insufficient balances, achieving 300ms latency with 100+ concurrent transactions. Ensured consistency and fault tolerance using catch-up mechanisms and MongoDB transaction logging.',
    image: blockchainImage,
    link: 'https://github.com/srinivaslikhith/ModifiedPaxosBanking',
    tags: ['Consensus', 'C++', 'gRPC', 'MongoDB', 'Paxos', 'Block-Chain']
  },
  
  {
    title: 'Plasma Donor App',
    description: "Developed a plasma donor web app, cutting deployment time by 70% with Docker and a Jenkins CI/CD pipeline. Utilized AWS Lambda, API Gateway, and DynamoDB for scalable data handling, with Amazon SNS for real-time notifications.",
    image: plasmaImage,
    link: 'https://github.com/srinivaslikhith/dynamite',
    tags: ['Containerization', 'Jenkins', 'AWS', 'CI/CD']
  },
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
  }
];

function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">
        <h2 className="section-title">{"<Projects />"}</h2>
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
    </section>
  );
}

export default Projects;