import { useParams } from 'react-router-dom';
import Projects from '../json/Projects.json'; // Adjust the path based on your directory structure


function Project() {
    const { slug } = useParams();
    const project = Projects[slug];
    if(!project) {
      return <span>The blog post you've requested doesn't exist.</span>;
    }
    const { title, description } = project;
    return (
      <div style={{ padding: 20 }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }

  export default Project;