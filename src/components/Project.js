import React from 'react';
import './Project.css';

function Project(props) {
  return (
      <div className='project-container'>
          <img src={props.image} alt={props.name} href={props.link} />
          <div className='project-info'>
          <h3 href={props.link}>{props.name} </h3>
          <p>{props.description}</p>
          <a href={props.repo}>GitHub Repo</a>
          </div>
      </div>
  );
}

export default Project;