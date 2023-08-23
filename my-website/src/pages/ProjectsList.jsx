import { Link } from 'react-router-dom';
import Projects from '../json/Projects.json'; // Adjust the path to the JSON file

function PostsLists() {
  return (
    <div>
      <ul>
        {Object.entries(Projects).map(([slug, { title }]) => (
          <li key={slug}>
            <Link to={`/posts/${slug}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsLists;