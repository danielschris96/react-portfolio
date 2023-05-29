import Project from './Project';
import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
      {
          name: "Project 1",
          description: "This is a project description",
          link: "",
          repo: "",
          image: "https://via.placeholder.com/400"
      },
      {
          name: "Project 2",
          description: "This is a project description",
          link: "",
          repo: "",
          image: "https://via.placeholder.com/400"
      },
      { 
          name: "Project 3",
          description: "This is a project description",
          link: "",
          repo: "",
          image: "https://via.placeholder.com/400"
      },
      {
          name: "Project 4",
          description: "This is a project description",
          link: "",
          repo: "",
          image: "https://via.placeholder.com/400"
      },
      
  ];

  return (
      <section>
        <h2>Portfolio</h2>
        <div className="portfolio-container">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
            ))}
        </div>
      </section>
  );
}

export default Portfolio;