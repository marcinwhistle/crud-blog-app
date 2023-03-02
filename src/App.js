import About from './components/pages/about/About';
import Home from './components/pages/Home/Home';
import AddPost from './components/pages/AddPost/AddPost';
import NotFound from './components/pages/NotFound/NotFound';
import SinglePost from './components/pages/SinglePost/SinglePost';
import EditPost from './components/pages/EditPost/EditPost';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';
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
        <Route path='/post/:id' element={<SinglePost />} />
        <Route path='/post/edit/:id' element={<EditPost />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
