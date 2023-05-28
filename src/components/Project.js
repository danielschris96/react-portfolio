function Project(props) {
  return (
      <div>
          <h3>{props.name}</h3>
          <img src={props.image} alt={props.name} />
          <a href={props.link}>Live Demo</a>
          <a href={props.repo}>GitHub Repo</a>
      </div>
  );
}

export default Project;