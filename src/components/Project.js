import React from 'react';
import './Project.css';

function Project(props) {
  return (
      <div className='project'>
          <h3>{props.name}</h3>
          <img src={props.image} alt={props.name} />
          <a href={props.repo}>GitHub Repo</a>
      </div>
  );
}

export default Project;