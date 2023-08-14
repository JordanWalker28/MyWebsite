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
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostsLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;