import About from './redux/components/pages/about/About';
import Home from './redux/components/pages/Home/Home';
import AddPost from './redux/components/pages/AddPost/AddPost';
import NotFound from './redux/components/pages/NotFound/NotFound';
import Post from './redux/components/pages/Post/Post';
import EditPost from './redux/components/pages/EditPost/EditPost';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/post/add' element={<AddPost />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/post/:id' element={<Post />} />
      <Route path='/post/edit/:id' element={<EditPost />} />
    </Routes>
  );
};

export default App;
