import Project from './Project';
import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
      {
          name: "Project 1",
          description: "This is a short project description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          link: "",
          repo: "",
          image: "/savvychef.JPG"
      },
      {
          name: "Project 2",
          description: "This is a short project description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          link: "",
          repo: "",
          image: "/streemy.JPG"
      },
      { 
          name: "Project 3",
          description: "This is a short project description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          link: "",
          repo: "",
          image: "https://via.placeholder.com/400"
      },
      {
          name: "Project 4",
          description: "This is a short project description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
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