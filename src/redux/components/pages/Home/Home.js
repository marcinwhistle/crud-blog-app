import Posts from '../../features/Posts/Posts';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
const Home = () => {
  return (
    <>
      <Row>
        <Col className='d-flex justify-content-between'>
          <h1>All posts</h1>
          <Button
            className='mb-3'
            variant='outline-primary'
            as={Link}
            to={'/post/add'}
          >
            Add post
          </Button>
        </Col>
      </Row>
      <Posts />
    </>
  );
};

export default Home;
