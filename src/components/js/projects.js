import React from 'react';
import '../css/projects.css'; // Import the specific stylesheet for Projects page
import plasmaImage from '../images/blood1.webp';
import chatbotImage from '../images/chatbot1.webp';
import clusterImage from '../images/bigdata.webp'
// Sample project data
const projects = [
  {
    title: 'Plasma Donor App',
    description: 'Web app linking blood donors and recipients, deployed on Docker. Set up Jenkins CI/CD and integrated Amazon SNS for automated email notifications.',
    image: plasmaImage, // Update with actual path
    link: 'https://github.com/srinivaslikhith/dynamite' // Update with actual link
  },
  {
    title: 'Deep Learning Chatbot',
    description: 'Research article on chatbot functionality, highlighting neural network training with intent data. Developed a Python prototype to demonstrate these concepts.',
    image: chatbotImage, // Update with actual path
    link: 'https://www.warse.org/IJATCSE/static/pdf/file/ijatcse741032021.pdf' // Update with actual link
  },
  {
    title: 'Optimized IVF Clustering',
    description: 'Implemented and benchmarked clustering algorithms to optimize Inverted File Indexing for high-dimensional vector embeddings, focusing on efficiency, information loss, and balance.',
    image: clusterImage, // Update with actual path
    link: '' // Update with actual link
  },
  
];

function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-details">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
