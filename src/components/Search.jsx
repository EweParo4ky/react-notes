import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { actions as modalActions } from '../slices/modalSlice';
import { NotesList } from './NotesList';

const Search = ({ notes }) => {
  console.log('notes in search', notes);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);
  const inputRef = useRef(null);
  const opened = useSelector(state => state.modal.isOpened);
  const handleClose = () => {
    dispatch(modalActions.closeModal());
  };

  const searchNotes = val => {
    setValue(val);
    if (val !== '') {
      const currentNotes = notes;
      const newList = currentNotes.filter(note => {
        const noteText = note.noteText.toLowerCase();
        const searchValue = val.toLowerCase();
        const result = noteText.includes(searchValue);
        return result;
      });
      setFilteredNotes(newList);
    } else {
      setFilteredNotes([]);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Modal className='modalBody' show={opened} onHide={handleClose}>
      <Modal.Header className='modalCard' closeButton>
        <Modal.Title>
          Find Notes <i className='fa-solid fa-magnifying-glass'></i>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalCard'>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Control
              className='inputText'
              ref={inputRef}
              type='text'
              value={value}
              onChange={e => searchNotes(e.target.value)}
              autoComplete='off'
            />
          </Form.Group>
        </Form>
        <NotesList notes={filteredNotes} />
      </Modal.Body>
      <Modal.Footer className='modalCard'>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Search;
