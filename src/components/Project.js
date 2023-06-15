import React from 'react';
import './Project.css';

function Project(props) {
  return (
    <div className='project-container'>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={props.image} alt={props.name} className='project-img' />
      </a>
      <div className='project-info'>
        <div className='name-repo'>
        <h3>
          <a className='name' href={props.link} target="_blank" rel="noopener noreferrer">
            {props.name}
          </a>
        </h3>
        <a className='repo' href={props.repo} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Project;