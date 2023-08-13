import { useParams } from 'react-router-dom';
import BlogPostsData from '../json/BlogData.json'; // Adjust the path based on your directory structure


function Post() {
    const { slug } = useParams();
    const post = BlogPostsData[slug];
    if(!post) {
      return <span>The blog post you've requested doesn't exist.</span>;
    }
    const { title, description } = post;
    return (
      <div style={{ padding: 20 }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }

  export default Post;