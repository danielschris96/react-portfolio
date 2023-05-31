import React from 'react';
import './Project.css';

function Project(props) {
  return (
    <div className='project-container'>
      <a href={props.link}>
        <img src={props.image} alt={props.name} className='project-img' />
      </a>
      <div className='project-info'>
        <h3>
          <a href={props.link}>{props.name}</a>
        </h3>
        <p>{props.description}</p>
        <a href={props.repo}>GitHub Repo</a>
      </div>
    </div>
  );
}

export default Project;