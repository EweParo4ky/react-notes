import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions as notesActions } from '../slices/notesSlice';
import { actions as alertActions } from '../slices/alertSlice';
import { Form, Button } from 'react-bootstrap';
const { v4 } = require('uuid');

const Input = () => {
  const [title, setTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentNote = useSelector(state => state.notes.currentNote);
  console.log('currentNote', currentNote);
  const inputRef = useRef();
  const notes = useSelector(state => state.notes.notes);

  useEffect(() => {
    inputRef.current.focus();
    dispatch(alertActions.hideAlert());
  }, [notes, dispatch]);

  useEffect(() => {
    setTitle(currentNote.title);
    setNoteText(currentNote.noteText);
  }, [currentNote.noteText, currentNote.title]);

  const handleSubmit = e => {
    e.preventDefault();
    if (currentNote.id === null) {
      const newNote = {
        title,
        noteText,
        id: v4(),
      };

      dispatch(notesActions.addNote(newNote));
      setTitle('');
      setNoteText('');
    } else {
      const updatedNote = { ...currentNote, title, noteText };
      dispatch(notesActions.editNote(updatedNote));
    }
    dispatch(
      alertActions.showAlert({
        type: 'success',
        text: 'Note successfully added',
      })
    );
    dispatch(notesActions.clearNote());
    navigate('/');
  };

  const handleClose = () => {
    dispatch(notesActions.clearNote());
    navigate('/');
  };

  return (
    <div className='inputText'>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group className='mb-3 p-2'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            ref={inputRef}
            autoComplete='off'
            id='title'
            required
            placeholder='New note...'
            onChange={e => setTitle(e.target.value)}
            value={title}
            className='inputText'
          />

          <Form.Label>{`Note text symbols: ${noteText.length}`}</Form.Label>
          <Form.Control
            as='textarea'
            autoComplete='off'
            className='inputText'
            required
            id='noteText'
            value={noteText}
            onChange={e => setNoteText(e.target.value)}
            placeholder='Type your note...'
            rows={3}
          />
          <div className='d-flex justify-content-between p-1 mt-1'>
            <Button className='btn btn-lg' type='submit' variant='secondary'>
              <i className='fa-solid fa-check'></i>
            </Button>

            <Button
              className='btn-lg'
              variant='secondary'
              onClick={handleClose}
            >
              <i className='fa-solid fa-xmark'></i>
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Input;
