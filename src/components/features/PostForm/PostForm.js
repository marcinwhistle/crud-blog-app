import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3 w-50' controlId='formBasicEmail'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Lorem ipsum'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>
        <Form.Group className='mb-3 w-50' controlId='formBasicEmail'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>
        <Form.Group className='mb-3 w-25' controlId='formBasicEmail'>
          <Form.Label>Published</Form.Label>
          <Form.Text className='text-muted'></Form.Text>
          <DatePicker
            value={publishedDate}
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)}
          />
        </Form.Group>
        <Form.Group className={'mb-3 w-50'}>
          <Form.Label>Short description</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='Leave a comment here'
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className={'mb-3 w-50'}>
          <Form.Label>Main Content</Form.Label>
          <ReactQuill theme='snow' value={content} onChange={setContent} />
        </Form.Group>
        <Button variant='primary' type='submit'>
          {actionText}
        </Button>
      </Form>
    </>
  );
};

export default PostForm;
