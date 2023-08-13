import {
  BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom';
  import Navbar from './components/Navbar';
import Home from "./components/Home"
import About from "./components/About"
import NotFound from './components/NotFound';
import Posts from './components/Posts';
import PostsLists from './components/PostsLists';
import Post from './components/Post';
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostsLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;