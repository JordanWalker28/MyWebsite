import {Link } from 'react-router-dom';

const BlogPosts = {
    'first-blog-post': {
      title: 'First Blog Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adip.'
    },
    'second-blog-post': {
      title: 'Second Blog Post',
      description: 'Hello React Router v6'
    }
  };

function PostsLists() {
return (
    <div>
    <h2>Blog Posts</h2>
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