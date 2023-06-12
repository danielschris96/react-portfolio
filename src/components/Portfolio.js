import Project from './Project';
import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
      {
          name: "savvy chef",
          description: "Savvy Chef is a user-friendly web application that solves the problem of meal planning by suggesting recipes based on the ingredients available in your kitchen. With its intuitive interface and extensive filtering options, it provides tailored recipes that accommodate dietary restrictions and preferences. Additionally, the app offers cocktail pairing suggestions to complement your meal.",
          link: "https://didriklindberg.github.io/savvy-chef/",
          repo: "https://github.com/DidrikLindberg/savvy-chef",
          image: "/react-portfolio/savvychef.JPG"
      },
      {
          name: "Streemy",
          description: "Streemy is an application that aggregates streams from different platforms, allowing users to track their favorite streamers easily. It provides features such as displaying online and offline streamers and the ability to favorite streamers.",
          link: "https://young-tor-26363.herokuapp.com/",
          repo: "https://github.com/kylecoding1/Project2",
          image: "/react-portfolio/streemy.JPG"
      },
      { 
          name: "Budget Better",
          description: "Budget Better is a web application that helps users manage their personal finances effectively. With Budget Better, you can track your income and expenses, set budget goals, and gain insights into your spending habits.",
          link: "https://budgetbetter.herokuapp.com/",
          repo: "https://github.com/sheaschwenn/budget-better",
          image: "/react-portfolio/BudgetBetterLogo.PNG"
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