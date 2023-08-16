import {
  BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom';
  import Navbar from './components/Navbar';
import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume"
import NotFound from './pages/NotFound';
import Posts from './pages/Posts';
import PostsLists from './pages/PostsLists';
import Post from './components/Post';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home title="Hello"/>} />
        <Route path="/resume" element={<Resume title="Resume"/>} />
        <Route path="/posts" element={<Posts title="Posts"/>}>
          <Route index element={<PostsLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="/about" element={<About title="About"/>} />
        <Route path="/contact" element={<Contact title="Contact"/>} />
        <Route path="/projects" element={<Projects title="Projects"/>} />
        <Route path="*" element={<NotFound title="404: Page Not Found"/>} />
      </Routes>
    </Router>
  );
}

export default App;