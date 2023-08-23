import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../json/Projects.json'; // Adjust the path to the JSON file

function ProjectsList() {
  return (
    <div>
      <ul>
        {Projects.map((project, index) => (
          <li key={index}>
            <Link to={`/projects/${index}`}>
              <h3>{project.Name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsList;
