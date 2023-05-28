import Project from './Project';

function Portfolio() {
  const projects = [
      {
          name: "Project 1",
          link: "",
          repo: "",
          image: ""
      },
      {
          name: "Project 2",
          link: "",
          repo: "",
          image: ""
      },
      { 
          name: "Project 3",
          link: "",
          repo: "",
          image: ""
      },
      {
          name: "Project 4",
          link: "",
          repo: "",
          image: ""
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