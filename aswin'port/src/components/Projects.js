import React from "react";
import "./Projects.css";

function Projects() {
  const projectList = [
    { name: "Portfolio Website", description: "A personal portfolio website built with React." },
    { name: "Startup Idea Evaluator", description: "An AI model analyzing market landscape, growth potential, and competitive positioning, providing actionable insights." },
    { name: "Gold Price Predictor", description: "A machine learning project predicting gold, silver, and platinum prices using web-scraped data from Yahoo Finance." },
    { name: "MyScheme App", description: "An app showcasing government schemes with Android and iOS compatibility." },
  ];

  return (
    <div className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
