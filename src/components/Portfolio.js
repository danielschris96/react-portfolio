import Project from './Project';
import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
      {
          name: "Project 1",
          link: "",
          repo: "",
          image: "https://via.placeholder.com/150"
      },
      {
          name: "Project 2",
          link: "",
          repo: "",
          image: "https://via.placeholder.com/150"
      },
      { 
          name: "Project 3",
          link: "",
          repo: "",
          image: "https://via.placeholder.com/150"
      },
      {
          name: "Project 4",
          link: "",
          repo: "",
          image: "https://via.placeholder.com/150"
      },
      
  ];

  return (
      <section>
          <h2>Portfolio</h2>
          {projects.map((project, index) => (
              <Project key={index} {...project} />
          ))}
      </section>
  );
}

export default Portfolio;