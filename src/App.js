import About from './redux/components/pages/about/About';
import Home from './redux/components/pages/Home/Home';
import AddPost from './redux/components/pages/AddPost/AddPost';
import NotFound from './redux/components/pages/NotFound/NotFound';
import SinglePost from './redux/components/pages/SinglePost/SinglePost';
import EditPost from './redux/components/pages/EditPost/EditPost';
import Footer from './redux/components/views/Footer/Footer';
import Header from './redux/components/views/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/post/add' element={<AddPost />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/post/:postId' element={<SinglePost />} />
        <Route path='/post/edit/:id' element={<EditPost />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
