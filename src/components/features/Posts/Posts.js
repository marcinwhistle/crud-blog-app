import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { dateToStr } from '../../../utils/dateToStr';

const Posts = () => {
  const posts = useSelector((state) => getAllPosts(state));

  return (
    <Row>
      {posts.map((post) => (
        <Col key={post.id} xs='12' md='6' lg='4' className='p-2'>
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                <strong>Author: </strong>
                {post.author}
              </Card.Text>
              <Card.Text>
                <strong>Published: </strong>
                {dateToStr(post.publishedDate)}
              </Card.Text>
              <Card.Text>{post.shortDescription}</Card.Text>
              <Button variant='primary' as={NavLink} to={'/post/' + post.id}>
                Read more
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Posts;
