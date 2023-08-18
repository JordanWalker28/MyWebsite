import { Link } from 'react-router-dom';
import BlogPosts from '../json/BlogData.json'; // Adjust the path to the JSON file

function PostsLists() {
  return (
    <div>
      <ul>
        {Object.entries(BlogPosts).map(([slug, { title }]) => (
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