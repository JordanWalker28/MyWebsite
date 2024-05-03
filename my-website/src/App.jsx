import {
  BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom';
  import Navbar from './components/Navbar';
import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume"
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Post from './components/Post';
import Posts from './pages/Posts';
import PostsLists from './pages/PostsLists';
import Project from './components/Project';
import Projects from './pages/Projects';
import ProjectsList from './pages/ProjectsList';

function App() {
  const navLinks = [
    { to: '/projects', label: 'Projects' },
    { to: '/posts', label: 'Posts' },
    { to: '/resume', label: 'Resume' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <Router>
      <Navbar links={navLinks} />
      <Routes>
        <Route path="/" element={<Home title="Welcome"/>} />
        <Route path="/resume" element={<Resume title="Resume"/>} />
        <Route path="/posts" element={<Posts title="Posts"/>}>
          <Route index element={<PostsLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="/about" element={<About title="About"/>} />
        <Route path="/contact" element={<Contact title="Contact"/>} />
        <Route path="/projects" element={<Projects title="Projects"/>}>
          <Route index element={<ProjectsList />} />
          <Route path=":slug" element={<Project />} />
        </Route>
        <Route path="*" element={<NotFound title="404: Page Not Found"/>} />
      </Routes>
    </Router>
  );
}

export default App;