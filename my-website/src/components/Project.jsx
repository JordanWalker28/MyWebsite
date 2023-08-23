import { useParams, Link } from 'react-router-dom';
import Projects from '../json/Projects.json'; // Adjust the path based on your directory structure


function Project() {
    const { slug } = useParams();
    const project = Projects[slug];
    if(!project) {
      return <span>The blog post you've requested doesn't exist.</span>;
    }
    const { Name, Description } = project;
    return (
      <div style={{ padding: 20 }}>
        <Link to={`/projects`}>Back</Link>
        <h3>{Name}</h3>
        <p>{Description}</p>
      </div>
    );
  }

  export default Project;