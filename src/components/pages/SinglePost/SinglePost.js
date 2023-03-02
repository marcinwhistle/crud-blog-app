import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import { getPostById } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../redux/postsRedux';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { dateToStr } from '../../../utils/dateToStr';

const SinglePost = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const postData = useSelector((state) => getPostById(state, id));
  if (!postData) return <Navigate to='/' />;

  const handleDelete = () => {
    dispatch(removePost(id));
  };

  return (
    <>
      <Container>
        <Row>
          <Col className='col-6'>
            <Card border='light'>
              <Card.Body>
                <Card.Title>{postData.title}</Card.Title>
                <Card.Text>
                  <strong>Author: </strong>
                  {postData.author} <br />
                  <strong>Published: </strong>
                  {dateToStr(postData.publishedDate)} <br />
                </Card.Text>
                <Card.Text>{postData.shortDescription}</Card.Text>
                <Card.Text
                  dangerouslySetInnerHTML={{ __html: postData.content }}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Button variant='outline-info' as={NavLink} to={'/post/edit/' + id}>
              Edit
            </Button>
            <Button variant='outline-danger' onClick={handleShow}>
              Delete
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Are You Sure?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                This operation will pernamently and irreversibly delete this
                post
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                  Close
                </Button>
                <Button variant='outline-danger' onClick={handleDelete}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SinglePost;
